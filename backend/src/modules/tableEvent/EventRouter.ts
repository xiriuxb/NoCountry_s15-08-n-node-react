import express from 'express';
import EventController from './EventController'

const router = express.Router();
const controller = new EventController();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.post('/', controller.createEvent); //solo accede el admin
router.put('/:id', controller.updateEvent); //solo accede el admin
router.delete('/:id', controller.deleteEvent); //solo accede el admin

export default router;