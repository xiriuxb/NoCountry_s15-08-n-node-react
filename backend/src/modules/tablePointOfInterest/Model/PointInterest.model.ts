import { Model, DataTypes } from 'sequelize';
import { mySqlSequelize } from '@database/db';
import AdminModel from '@/modules/tableAdmin/model/AdminModel';

export type PointInterestType = {
    id_point_interest?: number;
    id_user: number;
    name: string;
    description: string;
    latitude: string;
    longitude: string;
    state?: boolean;
    rating?: number;
};

export default class PointInterestModel extends Model {
    public static associate() {
        PointInterestModel.belongsTo(AdminModel, {
            foreignKey: 'id_user',
            targetKey: 'id_user'
        });
    }

    public static initModel(sequelize: typeof mySqlSequelize) {
        PointInterestModel.init(
            {
                id_point_interest: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                id_user: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                    validate: {
                        notEmpty: true,
                        min: 4,
                        max: 100
                    }
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                latitude: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                longitude: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                state: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                createdAt: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: DataTypes.NOW
                },
                rating: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                    validate: {
                        min: 0,
                        max: 5
                    }
                }
            },
            {
                sequelize,
                freezeTableName: true,
                tableName: 'points_of_interest',
                timestamps: false
            }
        );
    }
}
