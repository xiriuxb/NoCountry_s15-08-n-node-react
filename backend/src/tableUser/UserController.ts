import Usuario from "../tableUser/UserModel"

class UserController {

    public createUser = async(): Promise<any> => {
        try
        {

        }catch(error){
            return null;
        }
    }

    public updateUser = async(): Promise<any> => {
        try
        {
            //si se cambia el expertize, se debe verificar que no este en una competicion

        }catch(error){
            return null;
        }
    }

    public deleteUser = async(): Promise<any> => {
        try
        {
            /*si se elimina se tiene que verificar que no aparece en ninguna otra tabla
            de lo contrario se debe proceder a borrar los datos en otras tablas
            Pescador:
            -   Publicacion
            -   Comentario
            -   Participante (en la tabla Evento, este debe estar finalizado, de lo contrario
                                no deberiamos permitir que se elimine aun)
            Administrador:
            -   PuntoInteres
            -   Evento
            -   Tips*/

        }catch(error){
            return null;
        }
    }

    public findOne = async(): Promise<any>=> {
        //buscar un usuario especifico
    }

    public findAll = async(): Promise<any>=> {
        //buscar todos los usuarios
    }

}

export default UserController;