import CRUDService from '@/utils/interface/CRUDService';
import PointInterestModel, { PointInterestType } from '../Model/PointInterest.model';

export default class PointOfInterestService
    implements CRUDService<PointInterestModel, PointInterestType>
{
    async findAll(): Promise<PointInterestModel[]> {
        try {
            return await PointInterestModel.findAll();
        } catch (error) {
            console.log(error);
            throw new Error('Method not implemented.');
        }
    }
    async findById(id: number): Promise<PointInterestModel | null> {
        throw new Error('Method not implemented.');
    }
    async create(entity: PointInterestType): Promise<PointInterestModel> {
        try {
            const PointInterest = await PointInterestModel.create({ ...entity });
            return PointInterest;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async update(id: number, entity: PointInterestType): Promise<PointInterestModel | null> {
        throw new Error('Method not implemented.');
    }
    async delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
