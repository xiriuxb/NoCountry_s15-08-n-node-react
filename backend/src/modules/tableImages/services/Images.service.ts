import cloudinary from '@/Config/Cloudinary.config';
import ImageModel, { ImageModelType } from '../Model/Image.model';
import { ImageUpload } from '@/utils/types';

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

    async create(file: ImageModelType) {
        try {
            return await ImageModel.create(file);
        } catch (error) {
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
}

export default new ImagesServices();
