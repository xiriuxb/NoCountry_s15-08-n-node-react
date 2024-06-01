import { Model, DataType } from 'sequelize-typescript';
import { ForeignKey, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '@database/db';

import { Expertise } from '@utils/types';
import UserModel from '@/modules/tableUser/model/User.model';

export default class FisherModel extends Model<
    InferAttributes<FisherModel>,
    InferCreationAttributes<FisherModel>
> {
    constructor() {
        super();
    }
    public id_user!: ForeignKey<UserModel['id_user']>;
    public address!: string;
    public expertise!: Expertise;
}

FisherModel.init(
    {
        id_user: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        address: {
            type: DataType.STRING,
            validate: {
                notEmpty: true,
                min: 4,
                max: 500
            },
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

FisherModel.belongsTo(UserModel, {
    foreignKey: 'id_user',
    targetKey: 'id_user'
});
