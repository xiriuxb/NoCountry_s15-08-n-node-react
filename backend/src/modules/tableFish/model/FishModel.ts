import { DataTypes, Model } from 'sequelize';
import { sequelize } from '@database/db';

class Fish extends Model {}

Fish.init(
    {
        idPez: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombreEspecie: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombreCientifico: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estacion: {
            type: DataTypes.ENUM,
            allowNull: false
        },
        peso: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        importanciaPescaDeportiva: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        createdAt: false,
        timestamps: false,
        tableName: 'Pez'
    }
);

/* ver los tipos ENUM y Crear valores iniciales (3 PECES)*/

export default Fish;
