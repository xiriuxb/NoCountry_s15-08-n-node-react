import { Table, Model, DataType } from 'sequelize-typescript';
import { sequelize } from '../../../database/db';
import { Role } from '../../../utils/types';

export default class UserModel extends Model {
    public id_user!: number;
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
