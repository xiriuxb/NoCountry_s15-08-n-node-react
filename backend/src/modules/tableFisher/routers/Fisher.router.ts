import { Router } from 'express';
import FisherController from '../controller/Fisher.controller';
import { validateID } from '@/middlewares/Validator.middleware';

const FisherRouter = Router();

FisherRouter.get('/', FisherController.findAll);
FisherRouter.get('/:id', validateID, FisherController.findById);
FisherRouter.post('/', FisherController.create);
FisherRouter.put('/:id', validateID, FisherController.update);
FisherRouter.delete('/:id', validateID, FisherController.delete);

export default FisherRouter;
