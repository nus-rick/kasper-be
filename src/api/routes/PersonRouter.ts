import { Router } from 'express';
import PersonHandler from '../handlers/PersonHandler';
import { IRouter } from './interfaces/IRouter';
import { successResponse, errorResponse } from './response';

const router = Router();

class PersonRouter implements IRouter {
  get routes (){
    router.get('/', async (_req, res) => {
      try {
        const persons = await PersonHandler.getAll();
        return successResponse(res, { persons });
      } catch (err) {
        return errorResponse(res, err);
      }
    })

    return router;
  }
}

export default new PersonRouter();
