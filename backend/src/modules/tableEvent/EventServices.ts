import EventModel from '@modules/tableEvent/model/EventModel'

export default class EventServices {

      /* TENER EN CUENTA: 
            - Cantidad de participantes
            - Punto de Interes */

    public findAll = async():Promise<any> => {
        try{
            const events = await EventModel.findAll();

            return events;
        }catch (error) {
            return null;
        }
    };

    public findOne = async(id: any):Promise<any> => {
        try{
            const event = await EventModel.findByPk(id);

            return event;
        }catch (error) {
            return null;
        }
    };

    public createEvent = async(body: any):Promise<any> => {
        try{
            const event = await EventModel.create({
                id_point_interest: body.id_point_interest,
                id_user: body.id_user,
                name: body.name,
                edition: body.edition,
                description: body.description,
                expertize: body.expertize,
                date: body.date,
                state: body.state,
                schedule: body.schedule,
                sponsor: body.sponsor
            });

            return event;

        }catch (error) {
            return error;
        }
    };

    public updateEvent = async(id: any, body: any):Promise<any> => {
        try{
            const event = await this.findOne(id);

            if (event === null){
                return null;
            }

            await event.update({
                id_point_interest: body.id_point_interest,
                id_user: body.id_user,
                name: body.name,
                edition: body.edition,
                description: body.description,
                expertize: body.expertize,
                date: body.date,
                state: body.state,
                schedule: body.schedule,
                sponsor: body.sponsor
            })

            await event.save();

            return event;
        }catch (error) {
            return null;
        }
    };

    public deleteEvent = async(id: any):Promise<any> => {
        try{
            const event = await this.findOne(id);

            if (event === null) {
                return null;
            }

            await event.destroy();
            return 'Se eliminó el evento'; //deberia entregar el objeto que se elimino
        }catch (error) {
            return null;
        }
    };


}