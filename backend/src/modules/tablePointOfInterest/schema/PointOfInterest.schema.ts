import { z } from 'zod';
import { PointInterestType } from '../Model/PointInterest.model';

const arrError = [
    'id_point_interest',
    'id_user',
    'name',
    'description',
    'latitud',
    'longitud',
    'state',
    'rating',
    'invalido'
];

export const pointOfInterestSchema = z.object({
    id_point_interest: z
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
    name: z
        .string({
            invalid_type_error: `${arrError[2]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[2]} ${arrError[arrError.length - 1]}`
        })
        .min(4, { message: `El nombre debe contener como mínimo 4 caracteres.` })
        .max(100, { message: `El nombre no debe superar los 100 caracteres.` })
        .trim(),
    description: z
        .string({
            invalid_type_error: `${arrError[3]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[3]} ${arrError[arrError.length - 1]}`
        })
        .min(4, { message: `La descripción debe contener como mínimo 4 caracteres.` })
        .max(500, { message: `La descripción no debe superar los 500 caracteres.` })
        .trim(),
    latitude: z
        .string({
            invalid_type_error: `${arrError[4]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[4]} ${arrError[arrError.length - 1]}`
        })
        .min(4, { message: `La latitud debe contener como mínimo 4 caracteres.` })
        .max(100, { message: `La latitud no debe superar los 100 caracteres.` })
        .trim()
        .regex(/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/, {
            message: 'La latitud debe ser un número.'
        }),
    longitude: z
        .string({
            invalid_type_error: `${arrError[5]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[5]} ${arrError[arrError.length - 1]}`
        })
        .min(4, { message: `La longitud debe contener como mínimo 4 caracteres.` })
        .max(100, { message: `La longitud no debe superar los 100 caracteres.` })
        .trim()
        .regex(/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/, {
            message: 'La longitud debe ser un número.'
        }),
    state: z
        .boolean({
            invalid_type_error: `${arrError[6]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[6]} ${arrError[arrError.length - 1]}`
        })
        .default(false)
        .optional(),
    rating: z
        .number({
            invalid_type_error: `${arrError[7]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[7]} ${arrError[arrError.length - 1]}`
        })
        .min(0, { message: `${arrError[7]} ${arrError[arrError.length - 1]}` })
        .max(5, { message: `${arrError[7]} ${arrError[arrError.length - 1]}` })
        .default(0)
        .optional()
});
