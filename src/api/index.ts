import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import baseRouter from './routes/index';

interface ApiInterface {
  server(): Promise<Application>;
}

class Api implements ApiInterface {
  async server(): Promise<Application> {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use('/api/v1', baseRouter.routes);

    app.get('/', (_req: Request, res: Response) => {
      res.send('Welcome to NUS express application!');
    });
    return app;
  }
}

export default new Api();
