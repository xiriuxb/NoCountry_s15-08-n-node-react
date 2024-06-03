import { Request, Response } from 'express';
import EventServices from '@modules/tableEvent/EventServices';
import EventHelper from '@modules/tableEvent/EventHelper';

export default class EventController{
    private helperE: EventHelper;
    private servicesE: EventServices;
    
    constructor(){
        this.helperE = new EventHelper()
        this.servicesE = new EventServices();
    }
    /* TENER EN CUENTA: 
            - Cantidad de participantes
            - Punto de Interes */

    public findAll = async(req: Request, res: Response):Promise<any> => {
        try{
            
            const events = await this.servicesE.findAll();

            if(events.length === 0 || events === null){
                res.status(404).json({message: 'No se encontraron Eventos.'})
                return;
            }

            res.status(200).json(events);
        }catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor'})
        }
    };

    public findOne = async(req: Request, res: Response):Promise<any> => {
        try{
            const cleanId = this.helperE.verifyId(req.params.id);

            if(!cleanId){
                res.status(400).json({message: 'No se encontró el evento, ID Inválido'});
                return;
            }

            const event = await this.servicesE.findOne(req.params.id);

            if(event === null){
                res.status(404).json({message: `No se encontró el Evento con el id ${req.params.id}.`})
                return;
            }

            res.status(200).json(event);
        }catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor'})
        }
    };

    public createEvent = async(req: Request, res: Response):Promise<any> => {
        try{
            const body = {
                id_point_interest: req.body.id_point_interest,
                id_user: req.body.id_user,
                name: req.body.name,
                edition: req.body.edition,
                description: req.body.description,
                expertiz: req.body.expertiz,
                date: req.body.date,
                state: req.body.state,
                schedule: req.body.schedule,
                sponsor: req.body.sponsor //puede ser NULL
            }

            const cleanEvent = this.helperE.verifyEvent(body);

            if (!cleanEvent.success) {
                res.status(400).json({error: cleanEvent.error.errors});
                return;
            }

            const event = await this.servicesE.createEvent(body);

            if (event === null) {
                res.status(400).json({message: 'Hubo un error al intentar crear el evento.'})
                return;
            }

            res.status(201).json(event)
        }catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor.'})
        }
    };

    public updateEvent = async(req: Request, res: Response):Promise<any> => {
        try{
            const cleanId = this.helperE.verifyId(req.params.id);

            if (!cleanId){
                res.status(400).json({message: 'No se pudo modificar el evento, ID inválido.'})
                return;
            }

            const body = {
                id_point_interest: req.body.id_point_interest,
                id_user: req.body.id_user,
                name: req.body.name,
                edition: req.body.edition,
                description: req.body.description,
                expertiz: req.body.expertiz,
                date: req.body.date,
                state: req.body.state,
                schedule: req.body.schedule,
                sponsor: req.body.sponsor
            }

            const cleanEvent = this.helperE.verifyEvent(body);

            if (!cleanEvent.success) {
                res.status(400).json({error: cleanEvent.error.errors})
                return;
            }

            const event = await this.servicesE.updateEvent(req.params.id, body);

            if(event === null){
                res.status(404).json({message: `No se pudo modificar el evento con el ID ${req.params.id}`})
                return;
            }

            return event;
        }catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor'});
        }
    };

    public deleteEvent = async(req: Request, res: Response):Promise<any> => {
        try{
            const cleanId = this.helperE.verifyId(req.params.id);

            if (!cleanId) {
                res.status(400).json({message: `Hubo un error en la solicitud. ID inválido`});
                return;
            }

            const event = await this.servicesE.deleteEvent(req.params.id);

            if (event === null){
                res.status(400).json({mesagge: `No se pudo eliminar el evento con el ID ${req.params.id}`});
                return;
            }

            res.status(200).json(event);

        }catch (error) {

        }
    };
}