import express from "express";
import UserRouter from "../tableUser/UserRouter";


const Router = express.Router();


Router.use("/", () => console.log("pagina inicio FRONT"));
Router.use("/usuarios", UserRouter) //debemos hacer el sistema de login aparte


export default Router;