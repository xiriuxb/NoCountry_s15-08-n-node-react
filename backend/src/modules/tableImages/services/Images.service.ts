import cloudinary from '@/Config/Cloudinary.config';
import ImageModel, { ImageModelType } from '../Model/Image.model';
import { ImageUpload } from '@/utils/types';
import { Transaction } from 'sequelize';

export class ImagesServices {
    async findAll() {}

    async findOneByIdPointInterest(id: number) {}

    async findOneByIdPublication(id: number) {}

    async findAllByIdPublication(id: number) {}

    async uploadImage(file: Express.Multer.File): Promise<ImageUpload> {
        try {
            const result = await cloudinary.uploader.upload(file.path, {
                folder: 'FishSeason'
            });

            return {
                public_id: result.public_id,
                url: result.secure_url
            };
        } catch (error) {
            throw new Error('Error uploading image');
        }
    }

    async create(file: ImageModelType, transaction?: Transaction): Promise<ImageModel> {
        try {
            const image = await ImageModel.create(file);
            await transaction?.commit();
            return image;
        } catch (error) {
            await transaction?.rollback();
            this.deleteImagesByPublic_id(file.public_id);
            throw new Error('Error creating image');
        }
    }

    async deleteImage(imageId: number) {
        const image = await ImageModel.findByPk(imageId);
        if (!image) {
            return null;
        }
        try {
            await cloudinary.uploader.destroy(image.dataValues.public_id);
            await image.destroy();
        } catch (error) {
            throw new Error('Error deleting image from Cloudinary');
        }
        return Promise.resolve();
    }

    async deleteImagesByPublic_id(public_id: string) {
        try {
            await cloudinary.uploader.destroy(public_id);
        } catch (error) {
            throw new Error('Error deleting image from Cloudinary');
        }
    }
}

export default new ImagesServices();
