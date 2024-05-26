import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/db';

class Competitor extends Model {}

Competitor.init(
    {
        idParticipante: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        idEvento: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        createdAt: false,
        timestamps: false,
        tableName: 'Participante'
    }
);

/* Establecer relacion con las tablas PESCADOR y EVENTO */

export default Competitor;
