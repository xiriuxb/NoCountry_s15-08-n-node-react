import CRUDService from '@/utils/interface/CRUDService';
import UserModel from '../model/User.model';
import { Role } from '@/utils/types';
import { compare, encrypt } from '@/utils/helpers/HandleEncrypt';

export default class UserService implements CRUDService<UserModel> {
    async findAll(): Promise<UserModel[]> {
        const users = await UserModel.findAll();
        return users;
    }

    async findById(userId: number): Promise<UserModel | null> {
        const user = await UserModel.findByPk(userId);
        return user;
    }

    async create(entity: UserModel): Promise<UserModel> {
        entity.role = Role.USER;
        entity.password = await encrypt(entity.password);

        return await UserModel.create(entity);
    }

    async update(userId: number, entity: UserModel): Promise<UserModel | null> {
        const user = await UserModel.findByPk(userId);
        if (!user) {
            return null;
        }

        entity.role = Role.USER;
        if (entity.password) {
            await updatePasswordIfNeeded(entity, user);
        }

        return await user.update(entity);
    }

    async delete(id: number): Promise<void> {
        await UserModel.destroy({ where: { id_user: id } });
    }
}

async function updatePasswordIfNeeded(entity: UserModel, user: UserModel): Promise<void> {
    const isSamePassword = await compare(entity.password, user.password);
    if (!isSamePassword) {
        entity.password = await encrypt(entity.password);
    }
}
