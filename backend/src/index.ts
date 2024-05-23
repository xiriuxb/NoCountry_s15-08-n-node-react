import express, { Express, Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import { swaggerSpecs } from './zwagger/zwagger.specs';
import { serve, setup } from 'swagger-ui-express';

const app: Application = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use('/api-docs', serve, setup(swaggerSpecs));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
