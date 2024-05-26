import { Table, Model, DataType } from 'sequelize-typescript';
import { sequelize } from '@database/db';
import UserModel from '@modules/tableUser/model/User.model';
import PublicationModel from '@modules/tablePublication/Model/Publication.model';

export default class CommentModel extends Model {
    public id_comment!: number;
    public id_user!: number;
    public id_publication!: number;
    public description!: string;
    public createdAt!: Date;
}

CommentModel.init(
    {
        id_comment: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: DataType.INTEGER,
            allowNull: false
        },
        id_publication: {
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
        }
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'comments',
        timestamps: false
    }
);

CommentModel.belongsTo(UserModel, { foreignKey: 'id_user' });
CommentModel.belongsTo(PublicationModel, { foreignKey: 'id_publication' });
