import express from 'express';
import cors from 'cors';
import UserRouter from '@/modules/tableUser/routers/User.router';
import FisherRouter from '@/modules/tableFisher/routers/Fisher.router';
import PublicationRouter from '@/modules/tablePublication/routers/Publication.router';
import PointInterestRouter from '@/modules/tablePointOfInterest/routers/PointOfInterest.router';
import { validateImage } from '@/middlewares/Validator.middleware';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');
// middlewares
app.use(cors());
app.use(validateImage);

// routes
app.use('/api/user', UserRouter);
app.use('/api/fisher', FisherRouter);
app.use('/api/publication', PublicationRouter);
app.use('/api/pointInterest', PointInterestRouter);

// error handler
app.use((err: any, req: any, res: any, next: any) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export default app;
