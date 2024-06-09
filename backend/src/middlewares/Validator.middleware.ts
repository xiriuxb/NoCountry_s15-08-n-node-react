import { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import cloudinary from 'cloudinary';
import { ImageFormat } from '@/utils/types';
import { ZodSchema } from 'zod';

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
const imageFilter = (
    req: Request,
    file: Express.Multer.File,
    callback: multer.FileFilterCallback
): void => {
    file.mimetype.startsWith('image/') &&
    ImageFormat.includes(file.originalname.split('.').pop() as string)
        ? callback(null, true)
        : callback(null, false);
};

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: imageFilter,
    limits: { fileSize: 10 * 1024 * 1024 }
});

export const validateImage = (req: Request, res: Response, next: NextFunction): void => {
    upload.single('image')(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            switch (err.code) {
                case 'LIMIT_FILE_SIZE':
                    return res.status(400).json({ message: 'Image file is too large' });
                default:
                    return res.status(400).json({ message: 'Invalid image' });
            }
        }
        if (err) {
            return res.status(400).json({ message: 'Error uploading image' });
        }
        next();
    });
};
