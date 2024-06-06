import express from 'express';
import FishController from '@modules/tableFish/FishController'

const Router = express.Router();
const ControllerFish = new FishController();

Router.get('/', ControllerFish.findAll);
Router.get('/:id', ControllerFish.findOne);

export default Router;