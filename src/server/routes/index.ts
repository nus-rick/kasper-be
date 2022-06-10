import { Router } from 'express';
import { IRouter } from './interfaces/IRouter';
import PersonRouter from './PersonRouter';

const router = Router();

class BaseRouter implements IRouter {
  get routes(): Router {
    router.use('/persons', PersonRouter.routes);
    return router;
  }
}

export default new BaseRouter();
