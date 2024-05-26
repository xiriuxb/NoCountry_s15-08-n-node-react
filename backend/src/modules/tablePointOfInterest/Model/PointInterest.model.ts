import { Table, Model, DataType } from 'sequelize-typescript';
import { sequelize } from '../../../database/db';
import UserModel from '../../tableUser/model/User.model';

export default class PointInterestModel extends Model {
    public id_point_interest!: number;
    public id_user!: number;
    public name!: string;
    public description!: string;
    public latitude!: string;
    public longitude!: string;
    public state!: string;
    public rating!: number;
}

PointInterestModel.init(
    {
        id_point_interest: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: DataType.INTEGER,
            allowNull: false
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        description: {
            type: DataType.STRING,
            allowNull: false
        },
        latitude: {
            type: DataType.STRING,
            allowNull: false
        },
        longitude: {
            type: DataType.STRING,
            allowNull: false
        },
        state: {
            type: DataType.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataType.DATE,
            allowNull: false
        },
        rating: {
            type: DataType.INTEGER,
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

PointInterestModel.belongsTo(UserModel, { foreignKey: 'id_user' });
