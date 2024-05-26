import { DataTypes, Model } from 'sequelize';
import { sequelize } from '@database/db';

class Admin extends Model {}

Admin.init(
    {
        idUsuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        contacto: {
            type: DataTypes.STRING,
            allowNull: true
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        createdAt: false,
        timestamps: false,
        tableName: 'administrador'
    }
);

//despues de que se sincronize quiero que haga lo siguiente
// Admin.addHook('afterSync', async()=>{
//     const count = await Admin.count();
//     if(count==0){
//         await Admin.create(
//             {idUsuario:1,contacto:'0810-555-444',direccion:'Costanera X',descripcion:'Club de Pesca'},
//         );
//     }
// })

/* Establecer relacion con la tabla USUARIO */

export default Admin;
