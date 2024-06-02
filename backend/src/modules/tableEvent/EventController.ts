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

    public findAll = async(req: Request, res: Response):Promise<any> => {
        try{

        }catch (error) {

        }
    };

    public findOne = async(req: Request, res: Response):Promise<any> => {
        try{

        }catch (error) {

        }
    };

    public createEvent = async(req: Request, res: Response):Promise<any> => {
        try{

        }catch (error) {

        }
    };

    public updateEvent = async(req: Request, res: Response):Promise<any> => {
        try{

        }catch (error) {

        }
    };

    public deleteEvent = async(req: Request, res: Response):Promise<any> => {
        try{

        }catch (error) {

        }
    };
}