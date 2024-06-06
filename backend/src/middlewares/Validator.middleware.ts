import { NextFunction, Request, Response } from 'express';

export const validateID =
    (paramName: string = 'id') =>
    (req: Request, res: Response, next: NextFunction): void => {
        const id = req.params?.[paramName];
        const parsedId = parseInt(id as string, 10);

        const isValidId = !isNaN(parsedId) && parsedId > 0 && Number.isInteger(parsedId);

        if (!isValidId) {
            res.status(400).json({ message: 'Invalid ID' });
        }

        (req as any).id = parsedId;
        next();
    };
