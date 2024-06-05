import { Model, DataTypes } from 'sequelize';
import { mySqlSequelize } from '@database/db';
import FisherModel from '@/modules/tableFisher/model/Fisher.model';
import PointInterestModel from '@/modules/tablePointOfInterest/Model/PointInterest.model';
import { CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import ImageModel from '@/modules/tableImages/Model/Image.model';

export default class PublicationModel extends Model<
    InferAttributes<PublicationModel>,
    InferCreationAttributes<PublicationModel>
> {
    public id_publication!: CreationOptional<number>;
    public id_point_interest!: number;
    public id_user!: number;
    public description!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
    public is_edit!: boolean;
    public rating!: number;

    public static associate() {
        PublicationModel.belongsTo(FisherModel, {
            foreignKey: 'id_user',
            targetKey: 'id_user'
        });

        PublicationModel.belongsTo(PointInterestModel, {
            foreignKey: 'id_point_interest',
            targetKey: 'id_point_interest'
        });

        PublicationModel.hasMany(ImageModel, {
            foreignKey: 'id_publication',
            sourceKey: 'id_publication'
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
                    allowNull: false
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
