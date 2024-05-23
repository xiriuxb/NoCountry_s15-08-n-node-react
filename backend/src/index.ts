import express from "express";
import Router from "./routes/router";

export const initApp = () => {
    const app = express();
    const port = process.env.PORT || 3000; 

    //middleware
    app.use(express.json());

    //conexion a la BD


    //ruta principal
    app.use("/",Router);

    //servidor
    app.listen(port, () => {console.log(`Servidor ejecutandose en el puerto ${port}.`)})
}

