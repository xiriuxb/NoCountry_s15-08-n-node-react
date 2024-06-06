import { ZodError, z } from "zod";
import { Comment } from '@utils/types';

class CommentHelper {

    private arrError = ['usuario', 'publicacion', 'descripcion', 'fecha', 'invalido','invalida'];

    schemaComment = z.object({
        id_user: 
        z.number({
            invalid_type_error: `${this.arrError[0]} ${this.arrError[this.arrError.length-2]}`,
            required_error: `${this.arrError[0]} ${this.arrError[this.arrError.length-2]}`
        })
        .min(1, {message: `${this.arrError[0]} ${this.arrError[this.arrError.length-2]}`})
        .max(100000000, {message: `${this.arrError[0]} ${this.arrError[this.arrError.length-2]}`}),

        id_publication: 
        z.number({
            invalid_type_error: `${this.arrError[1]} ${this.arrError[this.arrError.length-1]}`,
            required_error: `${this.arrError[1]} ${this.arrError[this.arrError.length-1]}`
        })
        .min(1, {message: `${this.arrError[1]} ${this.arrError[this.arrError.length-1]}`})
        .max(100000000, {message: `${this.arrError[1]} ${this.arrError[this.arrError.length-1]}`}),

        description: 
        z.string({
            invalid_type_error: `${this.arrError[2]} ${this.arrError[this.arrError.length-1]}`,
            required_error: `${this.arrError[2]} ${this.arrError[this.arrError.length-1]}`
        })
        .min(1,{message: `La ${this.arrError[2]} debe contener como mínimo 1 caracter.`})
        .max(200,{message: `La ${this.arrError[2]} debe contener como máximo 200 caracteres.`})
        .trim()
        .regex(/^[0-9a-zA-Z\s]+$/, {message: `El ${this.arrError[2]} puede contener solamente numeros, espacios y letras`}),

        createdAt: 
        z.date()
        .min(new Date("2024-01-01"), {message:`${this.arrError[3]} ${this.arrError[this.arrError.length-1]}`})
    })

    public verifyComment = (comment: any): {success: true, data: Comment} | {success: false, error: ZodError<any>} => {
        try {
            const isValidComment = this.schemaComment.parse(comment);
            return {success: true, data: isValidComment as Comment};
        } catch (error) {
            return {success: false, error: error as ZodError<any>};
        }
    }

    public verifyId = (id: any): boolean => {return !isNaN(id) && id > 0 && id < 100000000}

}

export default CommentHelper;