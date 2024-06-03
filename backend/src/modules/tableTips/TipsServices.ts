import TipsModel from './model/TipsModel';

export default class TipsServices {
    public findAll = async (): Promise<any> => {
        try {
            let tips = await TipsModel.findAll();

            //buscar los peces que esten relacionados con los tips

            return tips;
        } catch (error) {
            /* deberia devolver un objeto con varios atributos? */
            return null;
        }
    };

    public findOne = async (id: any): Promise<any> => {
        try {
            const tip = await TipsModel.findOne({
                where: {
                    id_tip: id
                }
            });

            /* buscar si tiene asociado un pez */
            return tip;
        } catch (error) {
            return null;
        }
    };

    public createTip = async (body: any): Promise<any> => {
        try {
            //verificar que el id_fish existe, ya que solo ponemos 3 peces
            const tip = await TipsModel.create({
                id_user: body.idU,
                id_fish: body.idF,
                zone: body.zone,
                description: body.description
            });

            return tip;
        } catch (error) {
            return null;
        }
    };

    public updateTip = async (id: any, body: any): Promise<any> => {
        try {
            const tip = await this.findOne(id);

            if (tip === null) {
                return null;
            }

            /*verificar que el id_fish sea 1, 2 o 3 */
            await tip.update({
                id_user: body.idU,
                id_fish: body.idF,
                zone: body.zone,
                description: body.description
            });

            await tip.save();
            return tip;
        } catch (error) {
            return null;
        }
    };

    public deleteTip = async (id: any): Promise<any> => {
        try {
            const tip = await this.findOne(id);

            if (tip === null) {
                return null;
            }

            await tip.destroy();
            return 'Tip borrado con exito'; //deberia devolver otra cosa, como al propio usuario administrador
        } catch (error) {
            return null;
        }
    };
}

