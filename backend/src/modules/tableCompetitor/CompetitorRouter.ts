import express from 'express';
import CompetitorController from '@modules/tableCompetitor/CompetitorController';

const router = express.Router();
const controllerC = new CompetitorController();

router.get('/', controllerC.findAll);
router.get('/:id', controllerC.findOne);
router.post('/', controllerC.createCompetitor);
router.put('/:id', controllerC.updateCompetitor);
router.delete('/:id', controllerC.deleteCompetitor);

export default router;
