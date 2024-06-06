import CRUDService from '@/utils/interface/CRUDService';
import PublicationModel from '../Model/Publication.model';

export default class PublicationService implements CRUDService<PublicationModel> {
    async findAll(): Promise<PublicationModel[]> {
        const publications = await PublicationModel.findAll();
        return publications;
    }

    async findById(id: number): Promise<PublicationModel | null> {
        const publication = await PublicationModel.findByPk(id);
        return publication;
    }

    async findByUserId(id: number): Promise<PublicationModel[]> {
        const publications = PublicationModel.findAll({ where: { id_user: id } });
        return publications;
    }

    async findByPointInterestId(id: number): Promise<PublicationModel[]> {
        const publications = PublicationModel.findAll({ where: { id_point_interest: id } });
        return publications;
    }

    async create(entity: PublicationModel): Promise<PublicationModel> {
        return await PublicationModel.create(entity);
    }

    async update(id: number, entity: PublicationModel): Promise<PublicationModel | null> {
        const publication = await PublicationModel.findByPk(id);
        if (!publication) {
            return null;
        }
        return await publication.update(entity);
    }

    async delete(id: number): Promise<void> {
        await PublicationModel.destroy({ where: { id_publication: id } });
    }
}
