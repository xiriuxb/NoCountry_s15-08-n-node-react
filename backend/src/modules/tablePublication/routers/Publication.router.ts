import { Router } from 'express';

import PublicationController from '../controllers/Publication.controller';
import { validateID } from '@/middlewares/Validator.middleware';

const PublicationRouter = Router();

PublicationRouter.get('/', PublicationController.findAll);
PublicationRouter.get('/:id', validateID, PublicationController.findById);
PublicationRouter.get('/user/:id', validateID, PublicationController.findByUserId);
PublicationRouter.get(
    '/pointInterest/:id',
    validateID,
    PublicationController.findByPointInterestId
);
PublicationRouter.post('/', PublicationController.create);
PublicationRouter.put('/:id', validateID, PublicationController.update);
PublicationRouter.delete('/:id', validateID, PublicationController.delete);

export default PublicationRouter;
