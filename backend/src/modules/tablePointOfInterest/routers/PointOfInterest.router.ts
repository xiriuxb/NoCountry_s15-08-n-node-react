import { Router } from 'express';
import PointOfInterestController from '../controllers/PointOfInterest.controller';
import { validateID } from '@/middlewares/Validator.middleware';

const PointInterestRouter = Router();

PointInterestRouter.get('/', PointOfInterestController.findAll);
PointInterestRouter.get('/:id', validateID, PointOfInterestController.findById);
PointInterestRouter.post('/', PointOfInterestController.create);
PointInterestRouter.put('/:id', validateID, PointOfInterestController.update);
PointInterestRouter.delete('/:id', validateID, PointOfInterestController.delete);

export default PointInterestRouter;
