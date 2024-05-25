import express from "express";
import UserServices from "../tableUser/UserServices";

const router = express.Router();
const services = new UserServices(); //doy por sentado que es una clase que se exportó, se puede cambiar

router.get('/', services); //servicecs.funcion
router.get('/:id', services) //services.funcion

export default router;