import { Request, Response } from 'express';
import PublicationService from '../services/Publication.service';
import { PublicationModelType } from '../Model/Publication.model';
import { EntityNotFound } from '@/Error/Exception';

export class PublicationController {
    private publicationService: PublicationService;
    constructor() {
        this.publicationService = new PublicationService();
    }

    public findAll = async (req: Request, res: Response): Promise<void> => {
        try {
            const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
            const date = req.query.order
                ? (req.query.order as string).toLocaleUpperCase() === 'DESC'
                    ? 'DESC'
                    : 'ASC'
                : undefined;

            const publications = await this.publicationService.findAll(limit);

            res.status(200).json(publications);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };

    public findById = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        try {
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
        const { id } = req.params;
        try {
            const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
            const publication = await this.publicationService.findByUserId(Number(id), limit);

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
        const { id } = req.params;
        try {
            const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
            const publication = await this.publicationService.findByPointInterestId(
                Number(id),
                limit
            );

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
        const dataPublication = req.body as PublicationModelType;

        try {
            if (!dataPublication) {
                throw new Error('Data not found');
            }
            const publication = await this.publicationService.create(dataPublication);

            res.status(201).json(publication);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred on the server.' });
        }
    };

    public createWithImage = async (req: Request, res: Response): Promise<void> => {
        try {
            const dataPublication = req.body;
            const FilesMulter = req.files as { [fieldname: string]: Express.Multer.File[] };

            if (!FilesMulter || !FilesMulter.image) {
                console.log('File not found');
                const createdPublication = await this.publicationService.create(
                    dataPublication as PublicationModelType
                );
                res.status(201).json(createdPublication);
                return;
            }

            const publication = await this.publicationService.createWithImage(
                dataPublication as PublicationModelType,
                FilesMulter.image[0]
            );

            res.status(201).json(publication);
        } catch (error: Error | any) {
            if (error instanceof EntityNotFound) {
                res.status(400).json({ error: error.message });
                return;
            }
            res.status(500).json({
                error: 'An error occurred on the server.',
                message: error.message
            });
        }
    };

    public update = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const dataPublication = req.body as PublicationModelType;

        try {
            const publication = await this.publicationService.update(Number(id), dataPublication);

            if (!publication) {
                res.status(404).json({ message: 'Publication not found' });
                return;
            }

            res.status(200).json(publication);
        } catch (error: Error | any) {
            res.status(500).json({
                error: 'An error occurred on the server.',
                message: error.message
            });
        }
    };
    public delete = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;

        try {
            const publication = await this.publicationService.findById(Number(id));
            if (!publication) {
                res.status(404).json({ message: 'Publication not found' });
                return;
            }

            await this.publicationService.delete(Number(id));
            res.status(204).json();
        } catch (error: Error | any) {
            res.status(500).json({
                error: 'An error occurred on the server.',
                message: error.message
            });
        }
    };
}

export default new PublicationController();
