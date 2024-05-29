import TipsModel from "./model/TipsModel";

export default class TipsController {

    public findAll = async(): Promise<any> => {

        try {
            
            let tips = await TipsModel.findAll();

            //buscar los peces que esten relacionados con los tips

            return tips;

        } catch (error) {
            /* deberia devolver un objeto con varios atributos? */
            return null;
        }
    }
}