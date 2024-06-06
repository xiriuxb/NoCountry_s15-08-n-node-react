import { Request, Response } from 'express';
import TipsServices from '@modules/tableTips/TipsServices';
import TipsHelper from '@modules/tableTips/TipsHelper';

export default class TipsController {
    private helperT: TipsHelper;
    private servicesT: TipsServices;

    constructor() {
        this.helperT = new TipsHelper();
        this.servicesT = new TipsServices();
    }

    public findAll = async (_req: Request, res: Response): Promise<any> => {
        try {
            const tips = await this.servicesT.findAll();

            if (tips.length === 0 || tips === null) {
                res.status(400).json({ message: 'No se pudieron encontrar los consejos' });
                return;
            }

            res.status(200).json(tips);
        } catch (error) {
            res.status(500).json({ error: 'Hubo un problema con el servidor' });
        }
    };

    public findOne = async (req: Request, res: Response): Promise<any> => {
        try {
            const isValidId = this.helperT.verifyId(req.params.id);

            if (!isValidId) {
                res.status(404).json({ message: 'Hubo un error al buscar el consejo, id no valido' });
                return;
            }

            const tip = await this.servicesT.findOne(req.params.id);

            if (tip === null) {
                res.status(404).json({ message: `No se pudo encontrar el Tip con el id ${req.params.id}` });
                return;
            }

            res.status(200).json(tip);
        } catch (error) {
            res.status(500).json({ error: 'Hubo un problema con el servidor' });
        }
    };

    public createTip = async (req: Request, res: Response): Promise<any> => {
        try {
            const body = {
                id_user: req.body.id_user, // puedo setearlo a 1
                id_fish: req.body.id_fish, // puede ser NULL, 1 ... 100000000
                zone: req.body.zone,
                description: req.body.description
            }

            const cleanTip = this.helperT.verifyTips(body);

            if (!cleanTip.success) {
                res.status(400).json({ error: cleanTip.error.errors });
                return;
            }

            const tip = await this.servicesT.createTip(body);

            if (tip === null) {
                res.status(400).json({ message: 'Hubo un error al intentar crear el Tip.' });
                return;
            }

            res.status(201).json(tip);

        } catch (error) {
            res.status(500).json({ error: 'Hubo un problema con el servidor' });
        }
    };

    public updateTip = async (req: Request, res: Response): Promise<any> => {
        try {
            const cleanId = this.helperT.verifyId(req.params.id);

            if (!cleanId) {
                res.status(400).json({ message: 'Hubo un error en la solicitud. Id no valido' });
                return;
            }

            const body = {
                id_user: req.body.id_user, // puedo setearlo a uno
                id_fish: req.body.id_fish, // puede ser NULL, 1 ... 100000000
                zone: req.body.zone,
                description: req.body.description
            }

            const cleanTip = this.helperT.verifyTips(body);

            if (!cleanTip.success) {
                res.status(400).json({ error: cleanTip.error.errors });
                return;
            }

            const tip = await this.servicesT.updateTip(req.params.id, body);

            if (tip === null) {
                res.status(404).json({ message: `No se pudo modificar el Tip con el id ${req.params.id}` });
                return;
            }

            res.status(200).json(tip);

        } catch (error) {
            res.status(500).json({ error: 'Hubo un problema con el servidor' });
        }
    }

    public deleteTip = async (req: Request, res: Response): Promise<any> => {
        try {
            const cleanId = this.helperT.verifyId(req.params.id);

            if (!cleanId) {
                res.status(400).json({ message: 'Hubo un error en la solicitud. Id no valido' });
                return;
            }

            const tip = await this.servicesT.deleteTip(req.params.id);

            if (tip === null) {
                res.status(404).json({ message: `No se pudo eliminar el Tip con el id ${req.params.id}` });
                return;
            }

            res.status(200).json(tip);

        } catch (error) {
            res.status(500).json({ error: 'Hubo un problema con el servidor' });
        }
    };
}
