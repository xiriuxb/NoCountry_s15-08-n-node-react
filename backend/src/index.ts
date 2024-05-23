import express from "express";
import Router from "./routes/router";
import { swaggerSpecs } from './zwagger/zwagger.specs';
import { serve, setup } from 'swagger-ui-express';

export const initApp = () => {
    const app = express();
    const port = process.env.PORT || 3000;

    //middleware
    app.use(express.json({limit:'50mb'}));

    //swagger
    app.use('/api-docs', serve, setup(swaggerSpecs));

    //conexion a la BD


    //ruta principal
    app.use("/",Router);

    //servidor
    app.listen(port, () => {console.log(`Servidor ejecutandose en el puerto ${port}.`)})
}
