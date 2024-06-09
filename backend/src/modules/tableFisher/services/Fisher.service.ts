import CRUDService from '@/utils/interface/CRUDService';
import FisherModel, { FisherModelType } from '../model/Fisher.model';
import { Expertise } from '@/utils/types';

export default class FisherService implements CRUDService<FisherModel, FisherModelType> {
    async findAll(): Promise<FisherModel[]> {
        const fishers = FisherModel.findAll();
        return fishers;
    }

    async findById(id: number): Promise<FisherModel | null> {
        try {
            const fisher = await FisherModel.findByPk(id);
            return fisher;
        } catch (error) {
            return null;
        }
    }

    async create(entity: FisherModelType): Promise<FisherModel> {
        try {
            if (!entity.id_user) {
                throw new Error('id_user is required');
            }

            if (!entity.expertise) {
                entity.expertise = Expertise.BEGINNER;
            }

            const fisher = await FisherModel.create({ ...entity });
            return fisher;
        } catch (error) {
            throw error;
        }
    }

    async update(id: number, entity: FisherModelType): Promise<FisherModel | null> {
        try {
            const fisher = await FisherModel.findByPk(id);
            if (!fisher) {
                return null;
            }
            return await fisher.update({ ...entity });
        } catch (error) {
            throw error;
        }
    }

    async delete(id: number): Promise<void> {
        await FisherModel.destroy({ where: { id_user: id } });
    }
}
