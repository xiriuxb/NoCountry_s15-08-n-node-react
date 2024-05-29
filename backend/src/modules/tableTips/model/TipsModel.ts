import { DataTypes, Model } from 'sequelize';
import { sequelize } from '@database/db';
import UserModel from '@/modules/tableUser/model/User.model';
import FishModel from '@/modules/tableFish/model/FishModel';

class TipsModel extends Model {}

TipsModel.init(
    {
        id_tip: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_fish: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        zone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        createdAt: false,
        timestamps: false,
        tableName: 'Tips'
    }
);

/* Establecer relacion con las tablas ADMINISTRADOR y PEZ*/

export default TipsModel;

TipsModel.belongsTo(UserModel, {
    foreignKey: 'id_user',
    targetKey: 'id_user'
})
TipsModel.belongsTo(FishModel, {
    foreignKey: 'id_fish',
    targetKey: 'id_fish'
})