import { Request, Response } from 'express';
import PointOfInterestService from '../services/PointOfInterest.service';

export class PointInterestController {
    private PointInterestService: PointOfInterestService;
    constructor() {
        this.PointInterestService = new PointOfInterestService();
    }

    public findAll = async (_req: Request, res: Response): Promise<void> => {
        try {
            const PointInterests = await this.PointInterestService.findAll();
            res.status(200).json(PointInterests);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };

    public findById = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;

        try {
            const PointInterest = await this.PointInterestService.findById(Number(id));
            if (!PointInterest) {
                res.status(404).json({ message: 'PointInterest not found' });
            }

            res.status(200).json(PointInterest);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };

    public create = async (req: Request, res: Response): Promise<void> => {
        try {
            const PointInterest = await this.PointInterestService.create(req.body);
            res.status(201).json(PointInterest);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };

    public update = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const data = req.body;

        try {
            const PointInterest = await this.PointInterestService.update(Number(id), data);
            if (!PointInterest) {
                res.status(404).json({ message: 'PointInterest not found' });
            }

            res.status(200).json(PointInterest);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };

    public delete = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;

        try {
            const PointInterest = await this.PointInterestService.findById(Number(id));
            if (!PointInterest) {
                res.status(404).json({ message: 'PointInterest not found' });
            }
            await this.PointInterestService.delete(Number(id));
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };
}

export default new PointInterestController();
