import { Router } from 'express';
import UserController from '../controllers/User.controller';

const router = Router();

router.get('/', UserController.findAll);
router.get('/:id', UserController.findById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;
