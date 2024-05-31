import { Model, DataType } from 'sequelize-typescript';
import { CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '@database/db';
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
}

UserModel.init(
    {
        id_user: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        last_name: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataType.STRING,
            allowNull: false
        },
        role: {
            type: DataType.ENUM(...Object.values(Role)),
            allowNull: false
        }
    },
    { sequelize, freezeTableName: true, createdAt: false }
);

UserModel.hasOne(AdminModel, { foreignKey: 'id_user', sourceKey: 'id_user' });
UserModel.hasMany(FisherModel, { foreignKey: 'id_user', sourceKey: 'id_user' });
