import express from 'express';

import cors from 'cors';
import { validateImage } from '@/middlewares/Validator.middleware';

import UserRouter from '@/modules/tableUser/routers/User.router';
import FisherRouter from '@/modules/tableFisher/routers/Fisher.router';
import PublicationRouter from '@/modules/tablePublication/routers/Publication.router';
import PointInterestRouter from '@/modules/tablePointOfInterest/routers/PointOfInterest.router';
import TipsRouter from '@modules/tableTips/TipsRouter';
import FishRouter from '@modules/tableFish/FishRouter';
import CommentRouter from '@modules/tableComment/CommentRouter';
import EventRouter from '@modules/tableEvent/EventRouter';
import CompetitorRouter from '@modules/tableCompetitor/CompetitorRouter';

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
app.use('/api/fish', FishRouter);
app.use('/api/publication', PublicationRouter);
app.use('/api/comment', CommentRouter);
app.use('/api/pointInterest', PointInterestRouter);
app.use('/api/tips', TipsRouter);
app.use('/api/event', EventRouter);
app.use('/api/competitor', CompetitorRouter);
app.use('/api/pointOfInterest', PointInterestRouter);

// error handler
app.use((err: any, req: any, res: any, next: any) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export default app;
