import CRUDService from '@/utils/interface/CRUDService';
import PublicationModel, { PublicationModelType } from '../Model/Publication.model';
import { mySqlSequelize } from '@/database/db';
import { ImagesServices } from '@/modules/tableImages/services/Images.service';
import fs from 'fs';
import FisherService from '@/modules/tableFisher/services/Fisher.service';
import { EntityNotFound, InvalidArgument } from '@/Error/Exception';

export default class PublicationService
    implements CRUDService<PublicationModel, PublicationModelType>
{
    private ImagesService: ImagesServices = new ImagesServices();
    private fisherService = new FisherService();

    async findAll(): Promise<PublicationModel[]> {
        try {
            const publications = await PublicationModel.findAll();
            return publications;
        } catch (error: Error | any) {
            throw error;
        }
    }

    async findById(id: number): Promise<PublicationModel | null> {
        try {
            const publication = await PublicationModel.findByPk(id);
            return publication;
        } catch (error: Error | any) {
            throw error;
        }
    }

    async findByUserId(id: number): Promise<PublicationModel[]> {
        try {
            const publications = PublicationModel.findAll({ where: { id_user: id } });
            if (!publications) {
                throw new EntityNotFound('Publications not found');
            }
            return publications;
        } catch (error: Error | any) {
            throw error;
        }
    }

    async findByPointInterestId(id: number): Promise<PublicationModel[]> {
        const publications = PublicationModel.findAll({ where: { id_point_interest: id } });
        return publications;
    }

    async create(entity: PublicationModelType): Promise<PublicationModel> {
        try {
            const user = await this.fisherService.findById(entity.id_user);
            if (!user) {
                throw new EntityNotFound('User not found please use a valid Fisherman ID');
            }

            const publication = await PublicationModel.create({ ...entity });
            return publication;
        } catch (error) {
            throw error;
        }
    }

    async createWithImage(
        entity: PublicationModelType,
        file: Express.Multer.File
    ): Promise<PublicationModelType> {
        const transaction = await mySqlSequelize.transaction();

        try {
            const user = await this.fisherService.findById(entity.id_user);
            if (!user) {
                throw new EntityNotFound('User not found please use a valid Fisherman ID');
            }

            const publication = await PublicationModel.create({ ...entity });

            const ImageUpload = await this.ImagesService.uploadImage(file);

            await this.ImagesService.create({
                ...ImageUpload,
                id_publication: publication.dataValues.id_publication
            });

            await transaction.commit();

            return { ...publication.dataValues, ...ImageUpload };
        } catch (error: Error | any) {
            await transaction.rollback();

            throw error;
        } finally {
            fs.unlink(file.path, (err) => {
                if (err) throw err;
            });
        }
    }

    async update(id: number, entity: PublicationModelType): Promise<PublicationModel | null> {
        try {
            const publication = await PublicationModel.findByPk(id);
            if (!publication) {
                throw new EntityNotFound('Publication not found');
            }
            if (entity.description) entity.is_edited = true;

            return await publication.update({ ...entity });
        } catch (error: Error | any) {
            throw error;
        }
    }

    async delete(id: number): Promise<void> {
        await PublicationModel.destroy({ where: { id_publication: id } });
    }
}
