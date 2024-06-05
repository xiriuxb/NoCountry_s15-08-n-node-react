import CRUDService from '@/utils/interface/CRUDService';
import PointInterestModel from '../Model/PointInterest.model';

export default class PointOfInterestService implements CRUDService<PointInterestModel> {
    async findAll(): Promise<PointInterestModel[]> {
        throw new Error('Method not implemented.');
    }
    async findById(id: number): Promise<PointInterestModel | null> {
        throw new Error('Method not implemented.');
    }
    async create(entity: PointInterestModel): Promise<PointInterestModel> {
        throw new Error('Method not implemented.');
    }
    async update(id: number, entity: PointInterestModel): Promise<PointInterestModel | null> {
        throw new Error('Method not implemented.');
    }
    async delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
