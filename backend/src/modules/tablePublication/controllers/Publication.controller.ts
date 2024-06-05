import { Request, Response } from 'express';
import PublicationService from '../services/Publication.service';

export class PublicationController {
    private publicationService: PublicationService;
    constructor() {
        this.publicationService = new PublicationService();
    }

    public findAll = async (_req: Request, res: Response): Promise<void> => {
        try {
            const publications = await this.publicationService.findAll();
            res.status(200).json(publications);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };

    public findById = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const publication = await this.publicationService.findById(Number(id));
            if (!publication) {
                res.status(404).json({ message: 'Publication not found' });
            } else {
                res.status(200).json(publication);
            }
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };

    public findByUserId = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const publication = await this.publicationService.findByUserId(Number(id));
            if (!publication) {
                res.status(404).json({ message: 'Publication not found' });
            } else {
                res.status(200).json(publication);
            }
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };

    public findByPointInterestId = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const publication = await this.publicationService.findByPointInterestId(Number(id));
            if (!publication) {
                res.status(404).json({ message: 'Publication not found' });
            } else {
                res.status(200).json(publication);
            }
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };

    public create = async (req: Request, res: Response): Promise<void> => {
        try {
            const publication = await this.publicationService.create(req.body);
            res.status(201).json(publication);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };

    public update = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const dataPublication = req.body;

        try {
            const publication = await this.publicationService.update(Number(id), dataPublication);

            if (!publication) {
                res.status(404).json({ message: 'Publication not found' });
            }
            res.status(200).json(publication);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };
    public delete = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;

        try {
            await this.publicationService.delete(Number(id));
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };
}

export default new PublicationController();
