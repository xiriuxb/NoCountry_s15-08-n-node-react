import CRUDService from '@/utils/interface/CRUDService';
import PublicationModel, { PublicationModelType } from '../Model/Publication.model';
import { mySqlSequelize } from '@/database/db';
import { ImagesServices } from '@/modules/tableImages/services/Images.service';

export default class PublicationService
    implements CRUDService<PublicationModel, PublicationModelType>
{
    private ImagesService: ImagesServices = new ImagesServices();

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

    async createWithImage(
        entity: PublicationModelType,
        file: Express.Multer.File
    ): Promise<PublicationModelType> {
        const transaction = await mySqlSequelize.transaction();

        try {
            const publication = await PublicationModel.create({ ...entity });

            const ImageUpload = await this.ImagesService.uploadImage(file);

            await this.ImagesService.create({
                ...ImageUpload,
                id_publication: publication.dataValues.id_publication
            });

            await transaction.commit();

            return { ...publication.dataValues, ...ImageUpload };
        } catch (error) {
            await transaction.rollback();

            throw error;
        }
    }

    async update(id: number, entity: PublicationModelType): Promise<PublicationModel | null> {
        const publication = await PublicationModel.findByPk(id);
        if (!publication) {
            return null;
        }
        if (entity.description) entity.is_edited = true;

        return await publication.update({ ...entity });
    }

    async delete(id: number): Promise<void> {
        await PublicationModel.destroy({ where: { id_publication: id } });
    }
}
