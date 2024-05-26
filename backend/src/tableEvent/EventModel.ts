import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db";

class Event extends Model{}

Event.init({
    idEvento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idPuntoInteres: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edicion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expertize: {
        type: DataTypes.ENUM,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM,
        allowNull: false
    },
    horario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    auspiciante: {
        type: DataTypes.STRING,
        allowNull: true
    }

},{
    sequelize,
    freezeTableName: true,
    createdAt: false,
    timestamps: false,
    tableName: 'Evento'
});

/* Establecer relacion con las tablas PUNTO DE INTERES y ADMINISTRADOR */
/* ver los tipos ENUM y DATE*/

export default Event;