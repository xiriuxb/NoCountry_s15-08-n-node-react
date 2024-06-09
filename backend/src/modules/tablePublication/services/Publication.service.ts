import CRUDService from '@/utils/interface/CRUDService';
import PublicationModel, { PublicationModelType } from '../Model/Publication.model';

export default class PublicationService
    implements CRUDService<PublicationModel, PublicationModelType>
{
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

    async create(entity: PublicationModelType): Promise<PublicationModel> {
        try {
            const publication = await PublicationModel.create({ ...entity });
            return publication;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id: number, entity: PublicationModelType): Promise<PublicationModel | null> {
        const publication = await PublicationModel.findByPk(id);
        if (!publication) {
            return null;
        }
        return await publication.update({ ...entity });
    }

    async delete(id: number): Promise<void> {
        await PublicationModel.destroy({ where: { id_publication: id } });
    }
}
