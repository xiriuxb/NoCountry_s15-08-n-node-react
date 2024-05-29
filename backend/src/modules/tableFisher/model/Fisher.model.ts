import { Table, Model, DataType } from 'sequelize-typescript';
import { sequelize } from '@database/db';
import AdminModel from '@/modules/tableAdmin/model/AdminModel';
import { Expertise } from '@utils/types';

export default class FisherModel extends Model {
    public id_fisher!: number;
    public id_user!: number;
    public address!: string;
    public expertise!: Expertise;
}

FisherModel.init(
    {
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
        tableName: 'fisher',
        timestamps: false
    }
);

FisherModel.belongsTo(AdminModel, {
    foreignKey: 'id_user',
    targetKey: 'id_user'
});
