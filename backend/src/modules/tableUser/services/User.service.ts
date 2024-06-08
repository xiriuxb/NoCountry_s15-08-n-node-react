import CRUDService from '@/utils/interface/CRUDService';
import UserModel, { UserModelType } from '../model/User.model';
import { Role } from '@/utils/types';
import { compare, encrypt } from '@/utils/helpers/HandleEncrypt';
import FisherService from '@/modules/tableFisher/services/Fisher.service';
import AdminService from '@/modules/tableAdmin/services/Admin.service';
import { FisherModelType } from '@/modules/tableFisher/model/Fisher.model';
import { AdminType } from '@/modules/tableAdmin/model/AdminModel';
import { mySqlSequelize } from '@/database/db';

export default class UserService implements CRUDService<UserModel, UserModelType> {
    private static servicesFisher: FisherService = new FisherService();
    private static servicesAdmin: AdminService = new AdminService();

    async findAll(): Promise<UserModel[]> {
        const users = await UserModel.findAll();
        return users;
    }

    async findById(userId: number): Promise<UserModel | null> {
        const user = await UserModel.findByPk(userId);
        return user;
    }

    async create(entity: UserModelType): Promise<UserModel> {
        const transaction = await mySqlSequelize.transaction();
        try {
            const encryptPassword = await encrypt(entity.password);
            const user = await UserModel.create({ ...entity, password: encryptPassword });

            entity.details.id_user = user.dataValues.id_user;
            await this.createEntityByRole(entity);

            await transaction.commit();
            return user;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    async update(userId: number, entity: UserModelType): Promise<UserModel | null> {
        const user = await UserModel.findByPk(userId);
        if (!user) {
            return null;
        }
        if (entity.password) {
            await updatePasswordIfNeeded(entity, user);
        }

        return await user.update({ ...entity });
    }

    async delete(id: number): Promise<void> {
        await UserModel.destroy({ where: { id_user: id } });
    }

    async createEntityByRole(entity: UserModelType): Promise<void> {
        const details = entity.details;

        switch (entity.role.toString()) {
            case 'USER':
                UserService.servicesFisher.create(details as FisherModelType);
                break;
            case 'ADMIN':
                UserService.servicesAdmin.create(details as AdminType);
            default:
                entity.role = Role.USER;
                break;
        }
    }
}

async function updatePasswordIfNeeded(entity: UserModelType, user: UserModel): Promise<void> {
    const isSamePassword = await compare(entity.password, user.dataValues.password);
    if (!isSamePassword) {
        entity.password = await encrypt(entity.password);
        return;
    }
    entity.password = user.dataValues.password;
    return;
}
