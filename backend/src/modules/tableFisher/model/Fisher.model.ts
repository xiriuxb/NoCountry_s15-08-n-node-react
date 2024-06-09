import { Model } from 'sequelize';
import { DataType } from 'sequelize-typescript';
import { ForeignKey, InferAttributes, InferCreationAttributes } from 'sequelize';
import { mySqlSequelize } from '@database/db';

import { Expertise } from '@utils/types';
import UserModel from '@/modules/tableUser/model/User.model';

export type FisherModelType = {
    id_user?: number;
    address: string;
    expertise?: Expertise;
};

export default class FisherModel extends Model {
    public static associate() {
        FisherModel.belongsTo(UserModel, {
            foreignKey: 'id_user',
            targetKey: 'id_user'
        });
    }

    public static initModel(sequelize: typeof mySqlSequelize) {
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
                    allowNull: false,
                    defaultValue: Expertise.BEGINNER
                }
            },
            {
                sequelize,
                freezeTableName: true,
                tableName: 'fisher',
                timestamps: false
            }
        );
    }
}
