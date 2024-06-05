import { Request, Response } from "express";
import CompetitorServices from '@modules/tableCompetitor/CompetitorServices';
import CompetitorHelper from '@modules/tableCompetitor/CompetitorHelper';

class CompetitorController {
    private helperC: CompetitorHelper;
    private servicesC: CompetitorServices;

    constructor () {
        this.helperC = new CompetitorHelper();
        this.servicesC = new CompetitorServices();
    }

    public findAll = async(req: Request, res: Response): Promise<any> => {
        try {

            const competitors = await this.servicesC.findAll();

            if (competitors.length === 0 || competitors === null) {
                res.status(404).json({message: 'No se pudieron encontrar participantes'});
                return;
            }

            res.status(200).json(competitors);

        } catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor'});
        }
    }

    public findOne = async(req: Request, res:Response): Promise<any> => {
        try {
            const cleanId = this.helperC.verifyId(req.params.id);

            if (!cleanId) {
                res.status(400).json({message: 'No se encontró al participante, ID inválido.'})
                return;
            }

            const competitor = await this.servicesC.findOne(req.params.id);

            if (competitor === null) {
                res.status(404).json({message: 'No se pudo encontrar al participante.'});
                return;
            }

            res.status(200).json(competitor);
        } catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor.'});
        }
    }

    public createCompetitor = async(req: Request, res: Response): Promise<any> => {
        try {
            const body = {
                id_event: req.body.id_event,
                id_user: req.body.id_user
            }

            const cleanCompetitor = this.helperC.verifyCompetitor(body);

            if (!cleanCompetitor.success) {
                res.status(400).json({error: cleanCompetitor.error.errors});
                return;
            }

            const competitor = await this.servicesC.createCompetitor(body);

            if (competitor === null) {
                res.status(400).json({message: 'No se pudo crear al participante.'})
                return;
            }

            res.status(201).json(competitor);
        } catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor'})
        }
    }

    public updateCompetitor = async(req: Request, res: Response): Promise<any> => {
        try {
            const cleanId = this.helperC.verifyId(req.params.id);

            if (!cleanId){
                res.status(400).json({message: 'No se pudo modificar al participante, ID inválido.'})
                return;
            }

            const body = {
                id_event: req.body.id_event,
                id_user: req.body.id_user
            }

            const cleanCompetitor = this.helperC.verifyCompetitor(body);

            if (!cleanCompetitor.success) {
                res.status(400).json({error: cleanCompetitor.error.errors})
                return;
            }

            const competitor = await this.servicesC.updateCompetitor(req.params.id, body);

            if(competitor === null){
                res.status(404).json({message: `No se pudo modificar al participante`})
                return;
            }

            return competitor;
        } catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor'})
        }
    }

    public deleteCompetitor = async(req: Request, res: Response): Promise<any> => {
        try {
            const cleanId = this.helperC.verifyId(req.params.id);

            if (!cleanId) {
                res.status(400).json({message: `Hubo un error en la solicitud. ID inválido`});
                return;
            }

            const competitor = await this.servicesC.deleteCompetitor(req.params.id);

            if (competitor === null){
                res.status(400).json({mesagge: `No se pudo eliminar al participante`});
                return;
            }

            res.status(200).json(competitor);
            
        } catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor'})
        }
    }

}

export default CompetitorController;