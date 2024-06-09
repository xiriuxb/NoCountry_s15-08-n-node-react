import { NextFunction, Request, Response } from 'express';
import { ZodAny, ZodSchema, ZodType, ZodTypeAny } from 'zod';

export const validateID = (req: Request, res: Response, next: NextFunction): void => {
    const id = req.params?.id;
    const parsedId = parseInt(id as string, 10);

    const isValidId = !isNaN(parsedId) && parsedId > 0 && Number.isInteger(parsedId);

    if (!isValidId) {
        res.status(400).json({ message: 'Invalid ID' });
        return;
    }

    (req as any).id = parsedId;
    next();
};

/**
 *  Validate Zod schema
 * @param schema - Zod schema
 * @returns  - Express middleware
 */
export function validateSchema(schema: ZodSchema<any>) {
    return (req: Request, res: Response, next: NextFunction): void => {
        try {
            const result = schema.safeParse(req.body);

            if (!result.success) {
                res.status(400).json({ message: result.error });
                return;
            }

            (req as any).body = result.data;
            next();
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
                return;
            }

            res.status(500).json({ message: 'Internal server error' });
            return;
        }
    };
}
