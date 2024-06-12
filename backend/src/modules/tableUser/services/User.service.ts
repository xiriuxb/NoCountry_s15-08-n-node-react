import CRUDService from '@/utils/interface/CRUDService';
import UserModel, { UserModelType } from '../model/User.model';
import { Role } from '@/utils/types';
import { compare, encrypt } from '@/utils/helpers/HandleEncrypt';
import FisherService from '@/modules/tableFisher/services/Fisher.service';
import AdminService from '@/modules/tableAdmin/services/Admin.service';
import { FisherModelType } from '@/modules/tableFisher/model/Fisher.model';
import { AdminType } from '@/modules/tableAdmin/model/AdminModel';
import { mySqlSequelize } from '@/database/db';
import { fisherSchema } from '@/modules/tableFisher/schema/Fisher.schema';
import { AdminSchema } from '@/modules/tableAdmin/schema/Admin.schema';

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

    async create(entity: UserModelType): Promise<UserModel | null> {
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
        try {
            const user = await UserModel.findByPk(userId);
            if (!user) {
                return null;
            }
            if (entity.password) {
                await updatePasswordIfNeeded(entity, user);
            }

            return await user.update({ ...entity });
        } catch (error) {
            throw error;
        }
    }

    async delete(id: number): Promise<void> {
        await UserModel.destroy({ where: { id_user: id } });
    }

    async createEntityByRole(user: UserModelType): Promise<void> {
        switch (user.role?.toString()) {
            case Role.USER.toString():
                await this.createFisher(user.details);
                break;

            case Role.ADMIN.toString():
                await this.createAdmin(user.details);
                break;

            default:
                throw new Error('Invalid role');
        }
    }

    private async createFisher(details: any): Promise<void> {
        const validDetails = await this.validateFisherDetails(details);
        await UserService.servicesFisher.create(validDetails);
    }

    private async createAdmin(details: any): Promise<void> {
        const validDetails = await this.validateAdminDetails(details);
        await UserService.servicesAdmin.create(validDetails);
    }

    private async validateFisherDetails(details: any): Promise<FisherModelType> {
        const parsedDetails = fisherSchema.safeParse(details);
        if (!parsedDetails.success) {
            throw new Error(parsedDetails.error.message);
        }
        return parsedDetails.data;
    }

    private async validateAdminDetails(details: any): Promise<AdminType> {
        const parsedDetails = AdminSchema.safeParse(details);
        if (!parsedDetails.success) {
            throw new Error('Invalid Admin details');
        }
        return parsedDetails.data;
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
