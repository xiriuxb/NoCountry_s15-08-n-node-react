import express from "express"


const Router = express.Router();


Router.use("/", () => console.log("pagina inicio FRONT"));


export default Router;