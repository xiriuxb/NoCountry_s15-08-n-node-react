import { Model, DataTypes } from 'sequelize';
import { mySqlSequelize } from '@database/db';
import FisherModel from '@/modules/tableFisher/model/Fisher.model';
import PointInterestModel from '@/modules/tablePointOfInterest/Model/PointInterest.model';

import ImageModel, { ImageModelType } from '@/modules/tableImages/Model/Image.model';
import CommentModel from '@/modules/tableComment/Model/Comment.model';
import { UserDTO, UserModelType } from '@/modules/tableUser/model/User.model';

export type PublicationModelType = {
    id_publication?: number;
    id_point_interest: number;
    id_user: number;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
    is_edited?: boolean;
    rating?: number;
    urls?: ImageModelType[] | null;
};

export type PublicationExpandedType = PublicationModel & UserModelType;

export type PublicationDTO = Omit<PublicationModelType, 'id_user'> & {
    user: UserDTO;
};

export default class PublicationModel extends Model {
    public static associate() {
        PublicationModel.belongsTo(FisherModel, {
            foreignKey: 'id_user',
            targetKey: 'id_user',
            as: 'fisher'
        });

        PublicationModel.belongsTo(PointInterestModel, {
            foreignKey: 'id_point_interest',
            targetKey: 'id_point_interest'
        });

        PublicationModel.hasMany(CommentModel, {
            foreignKey: 'id_publication',
            sourceKey: 'id_publication'
        });

        PublicationModel.hasMany(ImageModel, {
            foreignKey: 'id_publication',
            sourceKey: 'id_publication',
            as: 'images'
        });
    }

    public static initModel(sequelize: typeof mySqlSequelize) {
        PublicationModel.init(
            {
                id_publication: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                id_point_interest: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                id_user: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                description: {
                    type: DataTypes.TEXT,
                    allowNull: false
                },
                createdAt: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: DataTypes.NOW
                },
                updatedAt: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: DataTypes.NOW
                },
                is_edit: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false
                },
                rating: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    defaultValue: 0
                }
            },
            {
                sequelize,
                freezeTableName: true,
                timestamps: false
            }
        );
    }
}