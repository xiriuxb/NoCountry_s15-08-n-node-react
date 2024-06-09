import { z } from 'zod';
import { AdminType } from '../model/AdminModel';

const arrError = ['id_user', 'contact', 'address', 'description', 'invalido'];

export const AdminSchema = z.object({
    id_user: z
        .number({
            invalid_type_error: 'id_user invalido',
            required_error: 'id_user requerido'
        })
        .min(0, { message: 'id_user invalido' })
        .max(100000000, { message: 'id_user invalido' })
        .optional(),
    contact: z
        .string({
            invalid_type_error: 'contact invalido',
            required_error: 'contact requerido'
        })
        .min(4, { message: 'contact invalido' })
        .max(100, { message: 'contact invalido' })
        .trim()
        .optional(),
    address: z
        .string({
            invalid_type_error: 'address invalido',
            required_error: 'address requerido'
        })
        .min(4, { message: 'address invalido' })
        .max(100, { message: 'address invalido' })
        .trim()
        .optional(),
    description: z
        .string({
            invalid_type_error: 'description invalido',
            required_error: 'description requerido'
        })
        .min(4, { message: 'description invalido' })
        .max(500, { message: 'description invalido' })
        .trim()
        .optional()
});
