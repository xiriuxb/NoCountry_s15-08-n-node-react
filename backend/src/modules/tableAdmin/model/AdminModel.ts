import { DataTypes, Model } from 'sequelize';
import { mySqlSequelize } from '@database/db';
import UserModel from '@/modules/tableUser/model/User.model';

export type AdminType = {
    id_user?: number;
    contact?: string;
    address?: string;
    description?: string;
};

class AdminModel extends Model {
    public static associate() {
        AdminModel.belongsTo(UserModel, {
            foreignKey: 'id_user',
            targetKey: 'id_user'
        });
    }

    public static initModel(sequelize: typeof mySqlSequelize) {
        AdminModel.init(
            {
                id_user: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false
                },
                contact: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                address: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: true
                }
            },
            {
                sequelize,
                freezeTableName: true,
                createdAt: false,
                timestamps: false,
                tableName: 'admin'
            }
        );
    }
}

//despues de que se sincronize quiero que haga lo siguiente
// Admin.addHook('afterSync', async()=>{
//     const count = await Admin.count();
//     if(count==0){
//         await Admin.create(
//             {idUsuario:1,contacto:'0810-555-444',direccion:'Costanera X',descripcion:'Club de Pesca'},
//         );
//     }
// })

export default AdminModel;
