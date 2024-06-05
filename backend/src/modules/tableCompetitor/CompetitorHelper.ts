import { ZodError, z } from "zod";
import { Competitor } from '@utils/types';

class CompetitorHelper {

    private arrError = ['evento', 'usuario','invalido'];

    schemaCompetitor = z.object({
        id_event: z.number({
            invalid_type_error: `${this.arrError[0]} ${this.arrError[this.arrError.length-1]}`,
            required_error: `${this.arrError[0]} ${this.arrError[this.arrError.length-1]}`
        })
        .min(1, {message: `${this.arrError[0]} ${this.arrError[this.arrError.length-1]}`})
        .max(100000000, {message: `${this.arrError[0]} ${this.arrError[this.arrError.length-1]}`}),

        id_user: z.number({
            invalid_type_error: `${this.arrError[1]} ${this.arrError[this.arrError.length-1]}`,
            required_error: `${this.arrError[1]} ${this.arrError[this.arrError.length-1]}`
        })
        .min(1, {message: `${this.arrError[1]} ${this.arrError[this.arrError.length-1]}`})
        .max(100000000, {message: `${this.arrError[1]} ${this.arrError[this.arrError.length-1]}`}),
    });

    public verifyCompetitor = (competitor: any): {success: true, data: Competitor} | {success: false, error: ZodError<any>} => {
        try {
            const isValidCompetitor  = this.schemaCompetitor.parse(competitor);
            return {success: true, data: isValidCompetitor as Competitor};
        } catch (error) {
            return {success: false, error: error as ZodError<any>};
        }
    }

    public verifyId = (id: any) => {return !isNaN(id) && id > 0 && id < 100000000}
}



export default CompetitorHelper;