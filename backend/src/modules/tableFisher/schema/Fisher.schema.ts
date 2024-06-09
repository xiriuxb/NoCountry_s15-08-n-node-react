import { z } from 'zod';
import { Expertise } from '@/utils/types';
import { FisherModelType } from '../model/Fisher.model';

const arrError = ['id_user', 'address', 'expertise', 'invalido'];

export const fisherSchema: z.ZodType<FisherModelType> = z.object({
    id_user: z
        .number({
            invalid_type_error: `${arrError[0]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[0]} ${arrError[arrError.length - 1]}`
        })
        .min(0, { message: `${arrError[0]} ${arrError[arrError.length - 1]}` })
        .max(100000000, { message: `${arrError[0]} ${arrError[arrError.length - 1]}` }),
    address: z
        .string({
            invalid_type_error: `${arrError[1]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[1]} ${arrError[arrError.length - 1]}`
        })
        .min(4, { message: `La zona debe contener como mínimo 3 caracteres.` })
        .max(500, { message: `La zona no debe superar los 500 caracteres.` })
        .trim(),
    expertise: z
        .enum([Expertise.BEGINNER, Expertise.INTERMEDIATE, Expertise.EXPERT], {
            invalid_type_error: `${arrError[2]} ${arrError[arrError.length - 1]}`,
            required_error: `${arrError[2]} ${arrError[arrError.length - 1]}`
        })
        .default(Expertise.BEGINNER)
});
