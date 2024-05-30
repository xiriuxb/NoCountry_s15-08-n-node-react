import express from 'express';
import TipsServices from './TipsServices';

const router = express.Router();
const services = new TipsServices();

router.get('/', services.findAll);

export default router;