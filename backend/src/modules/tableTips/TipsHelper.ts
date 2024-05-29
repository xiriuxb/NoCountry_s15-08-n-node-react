import {ZodError, z} from 'zod';
import {Tips} from '@utils/types';

export default class TipsHelper {

    private arrError = ['usuario','pez','zona','descripcion','invalido']

    tipSchema = z.object(
        {
        id_user:
        z.number({
            invalid_type_error: `${this.arrError[0]} ${this.arrError[ this.arrError.length-1 ] }`,
            required_error: `${this.arrError[0]} ${this.arrError[ this.arrError.length-1 ] }`
        })
        .min(0,{message:`${this.arrError[0]} ${this.arrError[this.arrError.length-1]}`})                      
        .max(100000000,{message:`${this.arrError[0]} ${this.arrError[this.arrError.length-1]}`}),

        /* Tener en cuenta que puede ser NULL */
        id_fish:
        z.number({
            invalid_type_error: `${this.arrError[1]} ${this.arrError[ this.arrError.length-1 ] }`,
            required_error: `${this.arrError[1]} ${this.arrError[ this.arrError.length-1 ] }`
        })
        .min(0,{message:`${this.arrError[1]} ${this.arrError[this.arrError.length-1]}`})                      
        .max(100000000,{message:`${this.arrError[1]} ${this.arrError[this.arrError.length-1]}`}),

        zone: 
        z.string({
            invalid_type_error: `La zona debe contener como maximo 500 caracteres.`,
            required_error: `Zona invalida, supero el maximo de caracteres permitido.`
        })
        .min(4,{message: `La zona debe contener como minimo 3 caracteres.`})
        .max(500, {message: `La zona no debe superar los 500 caracteres.`})
        .trim()
        .regex(/^[a-zA-Z\s]+$/, {message: "La zona debe contener entre 3 y 500 caracteres"}),

        description:
        z.string({
            invalid_type_error: `La descripcion debe contener como maximo 500 caracteres.`,
            required_error: `Descripcion invalida, supero el maximo de caracteres permitido.`
        })
        .min(4,{message: `La descripcion debe contener como minimo 3 caracteres.`})
        .max(500, {message: `La descripcion no debe superar los 500 caracteres.`})
        .trim()
        .regex(/^[0-9a-zA-Z\s]+$/, {message: "La descripcion debe contener entre 3 y 500 caracteres"}),

        }
    )

    public verifyTips = (tips: any): {success: true; data: Tips} | {success: false; data: ZodError<any>} =>
        {
            try {
                const isValidTips = this.tipSchema.parse(tips);
                return {success: true, data: isValidTips as Tips}
            } catch (error) {
                return {success: false, data: error as ZodError<any>};
            }
        }


}