import express from 'express';
import CommentController from './CommentController';

const router = express.Router();
const controller = new CommentController();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.post('/', controller.createComment); //solo accede el admin
router.put('/:id', controller.updateComment); //solo accede el admin
router.delete('/:id', controller.deleteComment); //solo accede el admin

export default router;