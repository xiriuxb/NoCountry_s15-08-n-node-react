import { Router } from 'express';
import UserController from '../controllers/User.controller';
import { validateID, validateSchema } from '@/middlewares/Validator.middleware';
import { userSchema } from '../schema/User.schema';

const UserRouter = Router();

UserRouter.get('/', UserController.findAll);
UserRouter.get('/:id', validateID, UserController.findById);
UserRouter.post('/', validateSchema(userSchema), UserController.createUser);
UserRouter.put('/:id', validateID, UserController.updateUser);
UserRouter.delete('/:id', validateID, UserController.deleteUser);

export default UserRouter;
