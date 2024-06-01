import { Router } from 'express';
import FisherController from '../controller/Fisher.controller';

const router = Router();

router.get('/', FisherController.findAll);
router.get('/:id', FisherController.findById);
router.post('/', FisherController.create);
router.put('/:id', FisherController.update);
router.delete('/:id', FisherController.delete);

export default router;
