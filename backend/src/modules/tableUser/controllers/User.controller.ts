import { Request, Response } from 'express';
import UserModel from '../model/User.model';
import UserService from '../services/User.service';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public findAll = async (_req: Request, res: Response): Promise<void> => {
        try {
            const users = await this.userService.findAll();
            res.status(200).json(users);
        } catch (error: Error | any) {
            res.status(500).json({
                message: 'An error occurred while retrieving users.',
                error: error.message
            });
        }
    };

    public findById = async (_req: Request, _res: Response): Promise<void> => {
        try {
            const { id } = _req.params;
            const user = await this.userService.findById(Number(id));
            if (!user) {
                _res.status(404).json({ message: 'User not found' });
            } else {
                _res.status(200).json(user);
            }
        } catch (error: Error | any) {
            _res.status(500).json({
                message: 'An error occurred on the server.',
                error: error.message
            });
        }
    };

    public createUser = async (_req: Request, _res: Response) => {
        try {
            const user: UserModel = _req.body as UserModel;
            const createdUser = await this.userService.create(user);
            _res.status(201).json(createdUser);
        } catch (error: Error | any) {
            _res.status(500).json({
                message: 'An error occurred on the server.',
                error: error.message
            });
        }
    };

    public updateUser = async (_req: Request, _res: Response) => {
        try {
            const { id } = _req.params;
            const user: UserModel = _req.body as UserModel;
            const updatedUser = await this.userService.update(Number(id), user);
            if (!updatedUser) {
                _res.status(404).json({ message: 'User not found' });
            } else {
                _res.status(200).json(updatedUser);
            }
        } catch (error: Error | any) {
            _res.status(500).json({
                message: 'An error occurred on the server.',
                error: error.message
            });
        }
    };

    public deleteUser = async (_req: Request, _res: Response) => {
        try {
            const { id } = _req.params;
            await this.userService.delete(Number(id));
            _res.status(204).json();
        } catch (error: Error | any) {
            _res.status(500).json({
                message: 'An error occurred on the server.',
                error: error.message
            });
        }
    };
}

export default new UserController();
