import { DataTypes, Model } from 'sequelize';
import { sequelize } from '@database/db';
import PointInterestModel from '@/modules/tablePointOfInterest/Model/PointInterest.model';
import AdminModel from '@/modules/tableAdmin/model/AdminModel';

class EventModel extends Model {}

EventModel.init(
    {
        id_event: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_point_interest: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edition: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        expertize: {
            type: DataTypes.ENUM,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        state: {
            type: DataTypes.ENUM,
            allowNull: false
        },
        schedule: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sponsor: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        createdAt: false,
        timestamps: false,
        tableName: 'event'
    }
);

/* Establecer relacion con las tablas PUNTO DE INTERES y ADMINISTRADOR */
/* ver los tipos ENUM y DATE*/

export default EventModel;

EventModel.belongsTo(PointInterestModel, {
    foreignKey: 'id_point_interest',
    targetKey: 'id_point_interest'
});

EventModel.belongsTo(AdminModel, {
    foreignKey: 'id_user',
    targetKey: 'id_user'
})