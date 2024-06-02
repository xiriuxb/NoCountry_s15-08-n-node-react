import express from 'express';
import EventController from '@modules/tableEvent/EventController'

const router = express.Router();
const controller = new EventController();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.post('/', controller.createEvent);
router.put('/:id', controller.updateEvent);
router.delete('/:id', controller.deleteEvent);

export default router;