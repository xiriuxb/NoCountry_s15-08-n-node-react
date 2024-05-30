import {Request, Response} from 'express';
import TipsController from '@modules/tableTips/TipsController';
import TipsHelper from '@modules/tableTips/TipsHelper';

export default class TipsServices {

    private helperT: TipsHelper;
    private controllerT: TipsController;

    constructor()
    {
        this.helperT = new TipsHelper();
        this.controllerT = new TipsController;
    }

    public findAll = async(_req: Request, res: Response): Promise<any> => {
        try
        {
            const tips = await this.controllerT.findAll();

            if(tips.length === 0 || tips.length === null)
            {
                res.status(400).json({message: "No se pudieron encontrar los consejos"});
            }

            res.status(200).json(tips);

        }catch(error){
            res.status(500).json({error: 'Hubo un problema con el servidor'})
        }
    }
}