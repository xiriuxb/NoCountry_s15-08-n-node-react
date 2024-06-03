import { DataTypes, Model } from 'sequelize';
import { mySqlSequelize } from '@database/db';
import PointInterestModel from '@/modules/tablePointOfInterest/Model/PointInterest.model';
import AdminModel from '@/modules/tableAdmin/model/AdminModel';
import { Expertise, Role, Status } from '@/utils/types';

class EventModel extends Model {
    public static associate() {
        EventModel.belongsTo(PointInterestModel, {
            foreignKey: 'id_point_interest',
            targetKey: 'id_point_interest'
        });

        EventModel.belongsTo(AdminModel, {
            foreignKey: 'id_user',
            targetKey: 'id_user'
        });
    }

    public static initModel(sequelize: typeof mySqlSequelize) {
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
                    type: DataTypes.ENUM(...Object.values(Expertise)),
                    allowNull: false
                },
                date: {
                    type: DataTypes.DATE,
                    allowNull: false
                },
                state: {
                    type: DataTypes.ENUM(...Object.values(Status)),
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
    }
}

/* Establecer relacion con las tablas PUNTO DE INTERES y ADMINISTRADOR */
/* ver los tipos ENUM y DATE*/

export default EventModel;
