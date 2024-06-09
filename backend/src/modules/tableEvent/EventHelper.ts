import { ZodError, z } from 'zod';
import { Event, Expertise, stateEvent } from '@utils/types';

export default class EventHelper {
    private arrError = [
        'punto de interés',
        'usuario',
        'nombre',
        'edition',
        'descriptions',
        'expertize',
        'Fecha Inicio Evento',
        'estado',
        'horario',
        'auspiciaste',
        'invalido'
    ];

    eventSchema: z.ZodType<Event> = z.object({
        id_event: z.number().optional(),
        id_point_interest: z
            .number({
                invalid_type_error: `${this.arrError[0]} ${this.arrError[this.arrError.length - 1]}`,
                required_error: `${this.arrError[0]} ${this.arrError[this.arrError.length - 1]}`
            })
            .min(1, { message: `${this.arrError[0]} ${this.arrError[this.arrError.length - 1]}` })
            .max(100000000, {
                message: `${this.arrError[0]} ${this.arrError[this.arrError.length - 1]}`
            }),

        id_user: z
            .number({
                invalid_type_error: `${this.arrError[1]} ${this.arrError[this.arrError.length - 1]}`,
                required_error: `${this.arrError[1]} ${this.arrError[this.arrError.length - 1]}`
            })
            .min(1, { message: `${this.arrError[1]} ${this.arrError[this.arrError.length - 1]}` })
            .max(100000000, {
                message: `${this.arrError[1]} ${this.arrError[this.arrError.length - 1]}`
            }),

        name: z
            .string({
                invalid_type_error: `${this.arrError[2]} ${this.arrError[this.arrError.length - 1]}`,
                required_error: `${this.arrError[2]} ${this.arrError[this.arrError.length - 1]}`
            })
            .min(7, { message: `El ${this.arrError[2]} debe contener como mínimo 7 caracteres.` })
            .max(100, {
                message: `El ${this.arrError[2]} debe contener como máximo 100 caracteres.`
            })
            .trim()
            .regex(/^[0-9a-zA-Z\s]+$/, {
                message: `El ${this.arrError[2]} puede contener solamente numeros, espacios y letras`
            }),

        edition: z
            .string({
                invalid_type_error: `${this.arrError[3]} ${this.arrError[this.arrError.length - 1]}`,
                required_error: `${this.arrError[3]} ${this.arrError[this.arrError.length - 1]}`
            })
            .min(1, { message: `La ${this.arrError[3]} debe contener como mínimo 1 carácter.` })
            .max(20, { message: `La ${this.arrError[3]} debe contener como máximo 20 caracteres.` })
            .trim()
            .regex(/^[0-9a-zA-Z\s]+$/, {
                message: `La ${this.arrError[3]} puede contener solamente numeros, espacios y letras`
            }),

        description: z
            .string({
                invalid_type_error: `${this.arrError[4]} ${this.arrError[this.arrError.length - 1]}`,
                required_error: `${this.arrError[4]} ${this.arrError[this.arrError.length - 1]}`
            })
            .min(5, { message: `La ${this.arrError[4]} debe contener como mínimo 5 caracteres.` })
            .max(500, {
                message: `La ${this.arrError[4]} debe contener como máximo 500 caracteres.`
            })
            .trim()
            .regex(/^[0-9a-zA-Z\s]+$/, {
                message: `La ${this.arrError[4]} puede contener solamente numeros, espacios y letras`
            }),

        expertize: z.enum([Expertise.BEGINNER, Expertise.INTERMEDIATE, Expertise.EXPERT], {
            invalid_type_error: `${this.arrError[5]} ${this.arrError[this.arrError.length - 1]}`
        }),

        date: z.date().min(new Date('2024-01-01'), {
            message: `${this.arrError[6]} ${this.arrError[this.arrError.length - 1]}`
        }),

        state: z.enum([stateEvent.ACTIVO, stateEvent.FINALIZADO], {
            invalid_type_error: `${this.arrError[7]} ${this.arrError[this.arrError.length - 1]}`
        }),

        schedule: z
            .string({
                invalid_type_error: `${this.arrError[8]} ${this.arrError[this.arrError.length - 1]}`,
                required_error: `${this.arrError[8]} ${this.arrError[this.arrError.length - 1]}`
            })
            .min(2, { message: `El ${this.arrError[8]} debe contener como mínimo 2 caracteres.` })
            .max(30, { message: `El ${this.arrError[8]} debe contener como máximo 30 caracteres.` })
            .trim()
            .regex(/^[0-9a-zA-Z\s]+$/, {
                message: `El ${this.arrError[8]} puede contener solamente numeros, espacios y letras`
            }),

        sponsor: z
            .string({
                invalid_type_error: `${this.arrError[9]} ${this.arrError[this.arrError.length - 1]}`,
                required_error: `${this.arrError[9]} ${this.arrError[this.arrError.length - 1]}`
            })
            .min(5, { message: `El ${this.arrError[9]} debe contener como mínimo 5 caracteres.` })
            .max(100, {
                message: `El ${this.arrError[9]} debe contener como máximo 100 caracteres.`
            })
            .trim()
            .regex(/^[0-9a-zA-Z\s]+$/, {
                message: `El ${this.arrError[9]} puede contener solamente numeros, espacios y letras`
            })
            .nullable()
    });

    public verifyEvent = (
        event: any
    ): { success: true; data: Event } | { success: false; error: ZodError<any> } => {
        try {
            const isValidEvent = this.eventSchema.parse(event);
            return { success: true, data: isValidEvent as Event };
        } catch (error) {
            return { success: false, error: error as ZodError<any> };
        }
    };

    public verifyId = (id: any): boolean => {
        return !isNaN(id) && id > 0 && id < 100000000;
    };
}
