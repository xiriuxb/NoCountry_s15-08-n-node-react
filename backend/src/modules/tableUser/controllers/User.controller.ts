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

    public findById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const user = await this.userService.findById(Number(id));
            if (!user) {
                res.status(404).json({ message: 'User not found' });
            } else {
                res.status(200).json(user);
            }
        } catch (error: Error | any) {
            res.status(500).json({
                message: 'An error occurred on the server.',
                error: error.message
            });
        }
    };

    public createUser = async (req: Request, res: Response) => {
        try {
            const user: UserModel = req.body as UserModel;
            const createdUser = await this.userService.create(user);
            res.status(201).json(createdUser);
        } catch (error: Error | any) {
            res.status(500).json({
                message: 'An error occurred on the server.',
                error: error.message
            });
        }
    };

    public updateUser = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user: UserModel = req.body as UserModel;
            const updatedUser = await this.userService.update(Number(id), user);
            if (!updatedUser) {
                res.status(404).json({ message: 'User not found' });
            } else {
                res.status(200).json(updatedUser);
            }
        } catch (error: Error | any) {
            res.status(500).json({
                message: 'An error occurred on the server.',
                error: error.message
            });
        }
    };

    public deleteUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const user = await this.userService.findById(Number(id));
            if (!user) {
                res.status(404).json({ message: 'User not found' });
            }
            await this.userService.delete(Number(id));
            res.status(204).json();
        } catch (error: Error | any) {
            res.status(500).json({
                message: 'An error occurred on the server.',
                error: error.message
            });
        }
    };
}

export default new UserController();
