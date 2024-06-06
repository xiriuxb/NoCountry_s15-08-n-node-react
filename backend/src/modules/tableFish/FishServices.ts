import FishModel from "./model/FishModel";

class FishServices {

    public findAll = async(): Promise<any> => {
        try {
            const fishes = await FishModel.findAll();
            return fishes;
        } catch (error) {
            return null;
        }
    }

    public findOne = async(id: any): Promise<any> => {
        try {
            const fish = await FishModel.findByPk(id);
            return fish;
        } catch (error) {
            return null;
        }
    }
}

export default FishServices;