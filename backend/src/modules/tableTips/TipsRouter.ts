import express from 'express';
import TipsController from './TipsController';

const router = express.Router();
const controller = new TipsController();

router.get('/', controller.findAll);
router.get('/:id', controller.findAll);
router.post('/', controller.createTip); //solo accede el admin
router.put('/:id', controller.updateTip); //solo accede el admin
router.delete('/:id', controller.deleteTip); //solo accede el admin

export default router;