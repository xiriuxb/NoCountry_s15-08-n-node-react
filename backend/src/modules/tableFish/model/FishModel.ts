import { DataTypes, Model } from 'sequelize';
import { sequelize } from '@database/db';

class FishModel extends Model {}

FishModel.init(
    {
        id_fish: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        species_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        scientific_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        season: {
            type: DataTypes.ENUM,
            allowNull: false
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        importance_sport_fishing: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        createdAt: false,
        timestamps: false,
        tableName: 'fish'
    }
);

/* ver los tipos ENUM y Crear valores iniciales (3 PECES)*/

export default FishModel;
