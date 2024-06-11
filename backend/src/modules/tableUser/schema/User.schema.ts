import { Role } from '@/utils/types';
import { z } from 'zod';
import { UserModelType } from '../model/User.model';
import { fisherSchema } from '@/modules/tableFisher/schema/Fisher.schema';
import { AdminSchema } from '@/modules/tableAdmin/schema/Admin.schema';

const arrError = [
    'id_user',
    'name',
    'last_name',
    'email',
    'password',
    'role',
    'details',
    'invalido'
];

export const userSchema = z.object({
    id_user: z
        .number({
            invalid_type_error: `${arrError[0]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[0]} ${arrError[arrError.length - 1]}`
        })
        .min(0, { message: `${arrError[0]} ${arrError[arrError.length - 1]}` })
        .max(100000000, { message: `${arrError[0]} ${arrError[arrError.length - 1]}` })
        .optional(),
    name: z
        .string({
            invalid_type_error: `${arrError[1]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[1]} ${arrError[arrError.length - 1]}`
        })
        .min(4, { message: `El nombre debe contener como mínimo 4 caracteres.` })
        .max(100, { message: `El nombre no debe superar los 100 caracteres.` })
        .trim(),
    last_name: z
        .string({
            invalid_type_error: `${arrError[2]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[2]} ${arrError[arrError.length - 1]}`
        })
        .min(4, { message: `El apellido debe contener como mínimo 4 caracteres.` })
        .max(100, { message: `El apellido no debe superar los 100 caracteres.` })
        .trim(),
    email: z
        .string({
            invalid_type_error: `${arrError[3]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[3]} ${arrError[arrError.length - 1]}`
        })
        .min(4, { message: `El correo debe contener como mínimo 4 caracteres.` })
        .max(100, { message: `El correo no debe superar los 100 caracteres.` })
        .trim()
        .email({ message: 'El correo no es valido.' }),
    password: z
        .string({
            invalid_type_error: `${arrError[4]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[4]} ${arrError[arrError.length - 1]}`
        })
        .min(6, { message: `La contraseña debe contener como mínimo 6 caracteres.` })
        .trim()
        .regex(/^(?=.*[a-záéíóúüñ])(?=.*[A-ZÁÉÍÓÚÜÑ])(?=.*\d)[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\d]{6,}$/, {
            message:
                'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número.'
        }),
    role: z
        .enum([Role.ADMIN, Role.USER], {
            invalid_type_error: `${arrError[5]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[5]} ${arrError[arrError.length - 1]}`
        })
        .optional()
        .default(Role.USER),
    details: z.union([fisherSchema, AdminSchema])
});
