import { Table, Model, DataType } from 'sequelize-typescript';
import { sequelize } from '@database/db';
import UserModel from '@modules/tableUser/model/User.model';
import PublicationModel from '@modules/tablePublication/Model/Publication.model';
import { Expertise } from '@utils/types';

export default class FisherModel extends Model {
    public id_fisher!: number;
    public id_user!: number;
    public address!: string;
    public expertise!: Expertise;
}

FisherModel.init(
    {
        id_fisher: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: DataType.INTEGER,
            allowNull: false
        },
        address: {
            type: DataType.STRING,
            allowNull: false
        },
        expertise: {
            type: DataType.ENUM(...Object.values(Expertise)),
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'fishers',
        timestamps: false
    }
);

FisherModel.belongsTo(UserModel, {
    foreignKey: 'id_user',
    targetKey: 'id_user'
});

FisherModel.belongsTo(PublicationModel, {
    foreignKey: 'id_publication',
    targetKey: 'id_publication'
});
