import { Request, Response } from 'express';

import FisherService from '../services/Fisher.service';
import UserService from '@/modules/tableUser/services/User.service';
import FisherModel from '../model/Fisher.model';

export class FisherController {
    private fisherService: FisherService;
    private userService: UserService;

    constructor() {
        this.fisherService = new FisherService();
        this.userService = new UserService();
    }

    public findAll = async (_req: Request, res: Response): Promise<void> => {
        try {
            const fishers = await this.fisherService.findAll();
            res.status(200).json(fishers);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };

    public findById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const fisher = await this.fisherService.findById(Number(id));
            if (!fisher) {
                res.status(404).json({ message: 'Fisher not found' });
            } else {
                res.status(200).json(fisher);
            }
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };

    private getFisherById = async (id: number, res: Response): Promise<FisherModel | null> => {
        try {
            const fisher = await this.fisherService.findById(id);
            if (!fisher) {
                res.status(404).json({ message: 'Fisher not found' });
                return null;
            }
            return fisher;
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
            return null;
        }
    };

    public create = async (req: Request, res: Response): Promise<void> => {
        try {
            const fisher = req.body;
            const newFisher = await this.fisherService.create(fisher);
            res.status(201).json(newFisher);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };

    public update = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;

        const fisher = await this.getFisherById(Number(id), res);
        if (!fisher) return;

        try {
            const updatedFisher: FisherModel = req.body as FisherModel;
            await this.fisherService.update(Number(id), updatedFisher);

            res.status(200).json(updatedFisher);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };

    public delete = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;

        const fisher = await this.getFisherById(Number(id), res);
        if (!fisher) return;

        try {
            await this.fisherService.delete(Number(id));
            await this.userService.delete(fisher.id_user);

            res.status(204).json();
        } catch {
            res.status(500).json({ error: 'An error occurred on the server' });
        }
    };
}

export default new FisherController();
