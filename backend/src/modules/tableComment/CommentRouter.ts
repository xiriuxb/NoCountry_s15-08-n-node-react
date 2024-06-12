import express from 'express';
import CommentController from './CommentController';

const router = express.Router();
const controller = new CommentController();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.get('/publication/:id', controller.findCommentPublication); //todos los comentarios de esa publicacion
router.post('/', controller.createComment); 
router.put('/:id', controller.updateComment); 
router.delete('/:id', controller.deleteComment);

export default router;