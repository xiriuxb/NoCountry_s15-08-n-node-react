import { ZodError, z } from 'zod';
import { Event } from '@utils/types';

export default class EventHelper {

    private arrError = [' ', 'Fecha Inicio Evento','invalido'];

    eventSchema = z.object({
        id_point_interest:
        z.number({
            invalid_type_error: ``,
            required_error: ``
        })
        .min(1,{message: ``})
        .max(100000000, {message: ``}),

        id_user:
        z.number({
            invalid_type_error: ``,
            required_error: ``
        })
        .min(1,{message: ``})
        .max(100000000, {message: ``}),

        name:
        z.string(),

        edition:
        z.string(),

        description:
        z.string(),

        expertize:
        z.enum(['Casual', 'Amateur', 'Profesional']),

        date:
        z.date()
        .min(new Date("2024-01-01"), {message:`${this.arrError[1]} ${this.arrError[this.arrError.length-1]}`}),

        state:
        z.enum(['Activo', 'Finalizado']),

        schedule:
        z.string(),

        sponsor:
        z.string()
    })

}