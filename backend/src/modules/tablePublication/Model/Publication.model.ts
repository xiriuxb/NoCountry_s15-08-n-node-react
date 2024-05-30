import { Model, DataType } from 'sequelize-typescript';
import { sequelize } from '@database/db';
import FisherModel from '@/modules/tableFisher/model/Fisher.model';
import PointInterestModel from '@/modules/tablePointOfInterest/Model/PointInterest.model';


export default class PublicationModel extends Model {
    public id_publication!: number;
    public id_point_interest!: number;
    public id_user!: number;
    public description!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
    public is_edit!: boolean;
    public rating!: number;
}

PublicationModel.init(
    {
        id_publication: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_point_interest: {
            type: DataType.INTEGER,
            allowNull: false
        },
        id_user: {
            type: DataType.INTEGER,
            allowNull: false
        },
        description: {
            type: DataType.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataType.DATE,
            allowNull: false,
            defaultValue: DataType.NOW
        },
        updatedAt: {
            type: DataType.DATE,
            allowNull: false,
            defaultValue: DataType.NOW
        },
        is_edit: {
            type: DataType.BOOLEAN,
            allowNull: false
        },
        rating: {
            type: DataType.INTEGER,
            allowNull: true,
            defaultValue: 0
        }
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'publication',
        timestamps: false
    }
);

PublicationModel.belongsTo(FisherModel, {
    foreignKey: 'id_user',
    targetKey: 'id_user'
});

PublicationModel.belongsTo(PointInterestModel, {
    foreignKey: 'id_point_interest',
    targetKey: 'id_point_interest'
})
