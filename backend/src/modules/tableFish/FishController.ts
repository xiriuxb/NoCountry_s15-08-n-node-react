import { Request, Response } from "express";
import FishServices from "./FishServices";

class FishController {

    private servicesF: FishServices;

    constructor () {
        this.servicesF = new FishServices();
    }

    public findAll = async(req: Request, res: Response): Promise<any> => {
        try {
            const fishes = await this.servicesF.findAll();

            if (fishes.length === 0 || fishes === null) {
                res.status(404).json({message: 'No se pudieron encontrar los peces.'})
                return;
            }

            res.status(200).json(fishes);
        } catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor'})
        }
    }

    public findOne = async(req: Request, res: Response): Promise<any> => {
        try {
            //luego ver si lo toma o no, cuando se hagan los tests
            if (!isNaN(parseInt(req.params.id)) && parseInt(req.params.id) > 1 && parseInt(req.params.id) < 100000000) {
                res.status(400).json({message: 'No se pudo encontrar el pez, ID inválido'});
                return;
            }

            const fish = await this.servicesF.findOne(req.params.id);

            if (fish === null) {
                res.status(404).json({message: 'No se encontró al pez seleccionado.'})
                return;
            }

            res.status(200).json(fish);
        } catch (error) {
            res.status(500).json({error: 'Hubo un problema con el servidor'})
        }
    }
}

export default FishController;