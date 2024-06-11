import { Router } from 'express';

import PublicationController from '../controllers/Publication.controller';
import { validateID, validateImage, validateSchema } from '@/middlewares/Validator.middleware';
import { publicationSchema } from '../schema/Publication.schema';
import multer from 'multer';
import { multipartFormDataHandler } from '@/middlewares/FormData.middleware';

const PublicationRouter = Router();

PublicationRouter.get('/', PublicationController.findAll);
PublicationRouter.get('/:id', validateID, PublicationController.findById);
PublicationRouter.get('/user/:id', validateID, PublicationController.findByUserId);
PublicationRouter.get(
    '/pointInterest/:id',
    validateID,
    PublicationController.findByPointInterestId
);
PublicationRouter.post(
    '/',
    validateSchema(publicationSchema),
    PublicationController.createWithImage
);
PublicationRouter.put('/:id', validateID, PublicationController.update);
PublicationRouter.delete('/:id', validateID, PublicationController.delete);

export default PublicationRouter;
