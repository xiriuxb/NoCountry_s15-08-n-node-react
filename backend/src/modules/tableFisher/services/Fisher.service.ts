import CRUDService from '@/utils/interface/CRUDService';
import FisherModel from '../model/Fisher.model';

export default class FisherService implements CRUDService<FisherModel> {
    async findAll(): Promise<FisherModel[]> {
        const fishers = FisherModel.findAll();
        return fishers;
    }

    async findById(id: number): Promise<FisherModel | null> {
        const fisher = FisherModel.findByPk(id);
        return fisher;
    }

    async create(entity: FisherModel): Promise<FisherModel> {
        return await FisherModel.create(entity);
    }

    async update(id: number, entity: FisherModel): Promise<FisherModel | null> {
        const fisher = await FisherModel.findByPk(id);
        if (!fisher) {
            return null;
        }
        return await fisher.update(entity);
    }

    async delete(id: number): Promise<void> {
        await FisherModel.destroy({ where: { id_user: id } });
    }
}
