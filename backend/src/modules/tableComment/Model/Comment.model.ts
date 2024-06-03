import { Model, DataTypes } from 'sequelize';
import { mySqlSequelize } from '@database/db';
import AdminModel from '@/modules/tableAdmin/model/AdminModel';
import PublicationModel from '@modules/tablePublication/Model/Publication.model';

export default class CommentModel extends Model {
    public id_comment!: number;
    public id_user!: number;
    public id_publication!: number;
    public description!: string;
    public createdAt!: Date;

    public static associate() {
        CommentModel.belongsTo(AdminModel, {
            foreignKey: 'id_user',
            targetKey: 'id_user'
        });
        CommentModel.belongsTo(PublicationModel, {
            foreignKey: 'id_publication',
            targetKey: 'id_publication'
        });
    }

    public static initModel(sequelize: typeof mySqlSequelize) {
        CommentModel.init(
            {
                id_comment: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                id_user: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                id_publication: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                createdAt: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: DataTypes.NOW
                }
            },
            {
                sequelize,
                freezeTableName: true,
                tableName: 'comments',
                timestamps: false
            }
        );
    }
}
