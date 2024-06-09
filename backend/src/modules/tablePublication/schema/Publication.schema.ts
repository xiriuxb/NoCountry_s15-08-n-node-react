import { z } from 'zod';
import { PublicationModelType } from '../Model/Publication.model';

const arrError = [
    'id_publication',
    'id_user',
    'id_point_interest',
    'is_edit',
    'description',
    'rating',
    'invalido'
];

export const publicationSchema: z.ZodType<PublicationModelType> = z.object({
    id_publication: z
        .number({
            invalid_type_error: `${arrError[0]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[0]} ${arrError[arrError.length - 1]}`
        })
        .min(0, { message: `${arrError[0]} ${arrError[arrError.length - 1]}` })
        .max(100000000, { message: `${arrError[0]} ${arrError[arrError.length - 1]}` })
        .optional(),
    id_user: z
        .number({
            invalid_type_error: `${arrError[1]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[1]} ${arrError[arrError.length - 1]}`
        })
        .min(0, { message: `${arrError[1]} ${arrError[arrError.length - 1]}` })
        .max(100000000, { message: `${arrError[1]} ${arrError[arrError.length - 1]}` }),
    id_point_interest: z
        .number({
            invalid_type_error: `${arrError[2]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[2]} ${arrError[arrError.length - 1]}`
        })
        .min(0, { message: `${arrError[2]} ${arrError[arrError.length - 1]}` })
        .max(100000000, { message: `${arrError[2]} ${arrError[arrError.length - 1]}` }),
    is_edit: z
        .boolean({
            invalid_type_error: `${arrError[3]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[3]} ${arrError[arrError.length - 1]}`
        })
        .default(false)
        .optional(),
    description: z
        .string({
            invalid_type_error: `${arrError[4]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[4]} ${arrError[arrError.length - 1]}`
        })
        .min(4, { message: `La descripción debe contener como mínimo 4 caracteres.` })
        .max(500, { message: `La descripción no debe superar los 500 caracteres.` })
        .trim(),
    rating: z
        .number({
            invalid_type_error: `${arrError[5]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[5]} ${arrError[arrError.length - 1]}`
        })
        .min(0, { message: `${arrError[5]} ${arrError[arrError.length - 1]}` })
        .max(5, { message: `${arrError[5]} ${arrError[arrError.length - 1]}` })
        .default(0)
        .optional()
});
