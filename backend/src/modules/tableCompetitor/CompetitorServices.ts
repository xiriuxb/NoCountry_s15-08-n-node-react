import CompetitorModel from "./model/CompetitorModel";

class CompetitorServices {

    public findAll = async(): Promise<any> => {
        try {
            /* Ordenar los competidores por competicion */
            const competitors = await CompetitorModel.findAll({
                order: [
                    ['id_event', 'ASC'],
                    ['id_user', 'ASC']
                ]
            })

            return competitors;
        } catch (error) {
            return null;
        }
    }

    public findOne = async(id: any): Promise<any> => {
        try {
            const competitor = await CompetitorModel.findByPk(id);
            return competitor;
        } catch (error) {
            return null;
        }
    }

    public createCompetitor = async(body: any): Promise<any> => {
        try {
            const competitor = await CompetitorModel.create({
                id_event: body.id_event,
                id_user: body.id_user
            })

            return competitor;
        } catch (error) {
            return null;
        }
    }

    public updateCompetitor = async(id: any, body: any): Promise<any> => {
        try {
            const competitor = await this.findOne(id);

            if (competitor === null) {
                return null;
            }
            
            await competitor.update({
                id_event: body.id_event,
                id_user: body.id_user
            })

            await competitor.save();

            return competitor;
        } catch (error) {
            return null;
        }
    }

    public deleteCompetitor = async(id: any): Promise<any> => {
        try {
            const competitor = await this.findOne(id);

            if (competitor === null) {
                return null;
            }

            await competitor.destroy();

            return 'Se eliminó al participante.';
        } catch (error) {
            return null;
        }
    }
}

export default CompetitorServices;