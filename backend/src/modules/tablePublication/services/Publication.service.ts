import CRUDService from '@/utils/interface/CRUDService';
import { mySqlSequelize } from '@/database/db';

import PublicationModel, {
    PublicationDTO,
    PublicationExpandedType,
    PublicationModelType
} from '../Model/Publication.model';
import publicationMapper from '../Model/Publication.helper';

import UserModel from '@/modules/tableUser/model/User.model';
import FisherService from '@/modules/tableFisher/services/Fisher.service';
import ImageModel from '@/modules/tableImages/Model/Image.model';
import { ImagesServices } from '@/modules/tableImages/services/Images.service';

import { EntityNotFound } from '@/Error/Exception';
import fs from 'fs';

export default class PublicationService
    implements CRUDService<PublicationDTO, PublicationModelType>
{
    private ImagesService: ImagesServices = new ImagesServices();
    private fisherService = new FisherService();

    async findAll(): Promise<PublicationDTO[]> {
        try {
            const publications = await PublicationModel.findAll({
                include: [
                    {
                        model: ImageModel,
                        as: 'images',
                        attributes: ['url']
                    }
                ]
            });

            if (!publications) {
                throw new EntityNotFound('Publications not found');
            }
            const publicationsWithUser = await this.expandPublications(publications);

            return publicationMapper.mapAll(publicationsWithUser);
        } catch (error: Error | any) {
            throw error;
        }
    }

    async findById(id: number): Promise<PublicationDTO | null> {
        try {
            const publication = await PublicationModel.findByPk(id);
            const publicationWithUser = await this.expandPublication(publication!);
            return publicationMapper.map(publicationWithUser);
        } catch (error: Error | any) {
            throw error;
        }
    }

    async findByUserId(id: number): Promise<PublicationDTO[]> {
        try {
            const publications = await PublicationModel.findAll({ where: { id_user: id } });
            if (!publications) {
                throw new EntityNotFound('Publications not found');
            }
            const publicationsWithUser = await this.expandPublications(publications);
            return publicationMapper.mapAll(publicationsWithUser);
        } catch (error: Error | any) {
            throw error;
        }
    }

    async findByPointInterestId(id: number): Promise<PublicationModel[]> {
        const publications = PublicationModel.findAll({ where: { id_point_interest: id } });
        return publications;
    }

    async create(entity: PublicationModelType): Promise<PublicationDTO | null> {
        try {
            const user = await this.fisherService.findById(entity.id_user);
            if (!user) {
                throw new EntityNotFound('User not found please use a valid Fisherman ID');
            }

            const publication = await PublicationModel.create({ ...entity });
            const publicationWithUser = await this.expandPublication(publication);

            return publicationMapper.map(publicationWithUser);
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

    async update(id: number, entity: PublicationModelType): Promise<PublicationDTO | null> {
        try {
            const publication = await PublicationModel.findByPk(id);
            if (!publication) {
                throw new EntityNotFound('Publication not found');
            }
            if (entity.description) entity.is_edited = true;

            const publicationUpdated = await publication.update({ ...entity });
            const publicationWithUser = await this.expandPublication(publicationUpdated);

            return publicationMapper.map(publicationWithUser);
        } catch (error: Error | any) {
            throw error;
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const publication = await PublicationModel.findByPk(id);
            if (!publication) {
                throw new EntityNotFound('Publication not found');
            }

            await publication.destroy();
        } catch (error: Error | any) {
            throw error;
        }
    }

    async expandPublications(publications: PublicationModel[]): Promise<PublicationExpandedType[]> {
        const UserIds = [
            ...new Set(publications.map((publication) => publication.dataValues.id_user))
        ];

        const usersPublicationPromise = UserModel.findAll({
            where: { id_user: UserIds },
            attributes: ['id_user', 'name', 'last_name']
        });

        const [usersPublication] = await Promise.all([usersPublicationPromise]);

        const publicationsWithUser: PublicationExpandedType[] = publications.map((publication) => {
            const user = usersPublication.find(
                (user) => user.dataValues.id_user === publication.dataValues.id_user
            );
            return { ...publication.dataValues, user: user?.dataValues };
        });

        return publicationsWithUser;
    }

    async expandPublication(publication: PublicationModel): Promise<PublicationExpandedType> {
        const user = await UserModel.findByPk(publication.dataValues.id_user);
        return { ...publication.dataValues, user: user?.dataValues };
    }
}
