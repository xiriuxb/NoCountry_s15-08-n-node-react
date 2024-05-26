import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.disable('x-powered-by');
app.use(cors());

export default app;
