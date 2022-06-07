import { Router } from 'express';
import { IRouter } from './interfaces/IRouter';
import PersonRouter from './PersonRouter';

// Init router
const router = Router();

class BaseRouter implements IRouter {
  get routes(){
    router.use('/persons', PersonRouter.routes);
    return router;
  }
}

export default new BaseRouter();
