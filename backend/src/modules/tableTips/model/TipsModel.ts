import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/db';

class Tips extends Model {}

Tips.init(
    {
        idTip: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idPez: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        zona: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
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

export default Tips;
