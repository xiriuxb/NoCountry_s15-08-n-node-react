import { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import { ImageFormat } from '@/utils/types';
import { Schema, ZodParsedType, ZodSchema, z } from 'zod';
import { PublicationModelType } from '@/modules/tablePublication/Model/Publication.model';
import path from 'path';

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
export function validateSchema(schema: z.AnyZodObject) {
    return (req: Request, res: Response, next: NextFunction): void => {
        console.log(req.body);
        if (req.body) {
            const data = req.body as Record<string, ZodParsedType>;

            Object.keys(data).forEach((key) => {
                if (
                    (schema.shape[key]?._def.typeName === 'ZodNumber' ||
                        schema.shape[key]?._def?.innerType?._def.typeName === 'ZodNumber') &&
                    typeof data[key] === 'string'
                ) {
                    const transformedValue = parseInt(data[key] as string, 10);
                    req.body[key] = transformedValue;
                }
            });
        }

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
    console.log(file);

    if (
        file.mimetype.startsWith('image/') &&
        ImageFormat.includes(file.originalname.split('.').pop() as string)
    ) {
        console.log('File accepted');
        callback(null, true);
    } else {
        callback(null, false);
    }
};

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../uploads'),
    filename: (req, file, callback) => {
        callback(null, new Date().getTime() + file.originalname.trim());
    }
});

const upload = multer({
    storage: storage,
    fileFilter: imageFilter,
    limits: { fileSize: 5 * 1024 * 1024 }
});

export const validateImage = (req: Request, res: Response, next: NextFunction): void => {
    upload.fields([{ name: 'image', maxCount: 1 }])(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            switch (err.code) {
                case 'LIMIT_FILE_SIZE':
                    return res.status(400).json({ message: 'Image file is too large' });
                case 'LIMIT_UNEXPECTED_FILE':
                    return res.status(400).json({ message: 'Unexpected file' });
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
