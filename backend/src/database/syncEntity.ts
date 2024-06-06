import UserModel from '@/modules/tableUser/model/User.model';
import TipsModel from '@/modules/tableTips/model/TipsModel';
import PublicationModel from '@/modules/tablePublication/Model/Publication.model';
import PointInterestModel from '@/modules/tablePointOfInterest/Model/PointInterest.model';
import FisherModel from '@/modules/tableFisher/model/Fisher.model';
import FishModel from '@/modules/tableFish/model/FishModel';
import EventModel from '@/modules/tableEvent/model/EventModel';
import CommentModel from '@/modules/tableComment/Model/Comment.model';
import AdminModel from '@/modules/tableAdmin/model/AdminModel';
import CompetitorModel from '@/modules/tableCompetitor/model/CompetitorModel';
import { Sequelize } from 'sequelize';
import ImageModel from '@/modules/tableImages/Model/Image.model';

interface ModelTable {
    associate?: () => void;
    initModel: (sequelize: Sequelize) => void;
}
const models: ModelTable[] = [
    UserModel,
    TipsModel,
    FisherModel,
    AdminModel,
    FishModel,
    EventModel,
    CompetitorModel,
    PublicationModel,
    CommentModel,
    PointInterestModel,
    ImageModel
];
export const initializeModels = async (sequelize: Sequelize): Promise<void> => {
    models.forEach((model) => model.initModel(sequelize));
    models.forEach((model) => model.associate && model.associate());
};
