import { Router } from 'express';
import UserController from '../controllers/User.controller';
import { validateID } from '@/middlewares/Validator.middleware';

const UserRouter = Router();

UserRouter.get('/', UserController.findAll);
UserRouter.get('/:id', validateID, UserController.findById);
UserRouter.post('/', UserController.createUser);
UserRouter.put('/:id', validateID, UserController.updateUser);
UserRouter.delete('/:id', validateID, UserController.deleteUser);

export default UserRouter;
