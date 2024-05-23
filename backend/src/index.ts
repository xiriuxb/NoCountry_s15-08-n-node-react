import express from "express";
import Router from "./routes/router";
import bodyParser from 'body-parser';
import { swaggerSpecs } from './zwagger/zwagger.specs';
import { serve, setup } from 'swagger-ui-express';

export const initApp = () => {
    const app = express();
    const port = process.env.PORT || 3000;
    
    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    app.use(bodyParser.json({ limit: '50mb' }));

    //middleware
    app.use(express.json());

    //conexion a la BD


    //ruta principal
    app.use("/",Router);

    //swagger
    app.use('/api-docs', serve, setup(swaggerSpecs));

    //servidor
    app.listen(port, () => {console.log(`Servidor ejecutandose en el puerto ${port}.`)})
}
