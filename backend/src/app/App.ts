import express from 'express';
import cors from 'cors';
import UserRouter from '@/modules/tableUser/routers/User.router';
import FisherRouter from '@/modules/tableFisher/routers/Fisher.router';
import PublicationRouter from '@/modules/tablePublication/routers/Publication.router';

const app = express();
app.use(express.json());
app.disable('x-powered-by');
app.use(cors());

// routes
app.use('/api/user', UserRouter);
app.use('/api/fisher', FisherRouter);
app.use('/api/publication', PublicationRouter);

// error handler
app.use((err: any, req: any, res: any, next: any) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export default app;
