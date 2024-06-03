import {
    CreationOptional,
    InferAttributes,
    InferCreationAttributes,
    Model,
    DataTypes
} from 'sequelize';
import { mySqlSequelize } from '@/database/db';
import { Role } from '@utils/types';
import FisherModel from '@/modules/tableFisher/model/Fisher.model';
import AdminModel from '@/modules/tableAdmin/model/AdminModel';

export default class UserModel extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
> {
    constructor() {
        super();
    }
    public id_user!: CreationOptional<number>;
    public name!: string;
    public last_name!: string;
    public email!: string;
    public password!: string;
    public role!: Role;

    public static associate() {
        UserModel.hasOne(AdminModel, { foreignKey: 'id_user', sourceKey: 'id_user' });
        UserModel.hasOne(FisherModel, { foreignKey: 'id_user' });
    }

    public static initModel(sequelize: typeof mySqlSequelize) {
        UserModel.init(
            {
                id_user: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: DataTypes.STRING,
                    validate: {
                        notEmpty: true,
                        min: 4,
                        max: 100
                    },
                    allowNull: false
                },
                last_name: {
                    type: DataTypes.STRING,
                    validate: {
                        notEmpty: true,
                        min: 4,
                        max: 100
                    },
                    allowNull: false
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },
                password: {
                    type: DataTypes.STRING,
                    validate: {
                        notEmpty: true,
                        min: 6
                    },
                    allowNull: false
                },
                role: {
                    type: DataTypes.ENUM(...Object.values(Role)),
                    allowNull: false
                }
            },
            { sequelize, freezeTableName: true, createdAt: false }
        );
    }
}
