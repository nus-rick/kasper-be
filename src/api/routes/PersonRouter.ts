import { Router, Request, Response } from 'express';
import PersonHandler from '../handlers/PersonHandler';
import { IRouter } from './interfaces/IRouter';
import { successResponse, errorResponse } from './response';

const router = Router();

class PersonRouter implements IRouter {
  get routes (){
    router.get(
      '/',
      async (_req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
        try {
          const persons = await PersonHandler.getAll();
          return successResponse(res, { persons });
        } catch (err) {
          return errorResponse(res, err);
        }
      }
    )

    router.post(
      '/',
      async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
        try {
          const person = await PersonHandler.create(req.body);
          return successResponse(res, { person });
        } catch (err) {
          return errorResponse(res, err);
        }
      }
    )

    router.patch(
      '/:id',
      async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
        try {
          const { params, body } = req;
          const { id } = params;
          const person = await PersonHandler.update(parseInt(id), body);
          return successResponse(res, { person });
        } catch (err) {
          return errorResponse(res, err);
        }
      }
    )

    router.delete(
      '/:id',
      async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
        try {
          const { params } = req;
          const { id } = params;
          const result = await PersonHandler.delete(parseInt(id));
          return successResponse(res, { isDeleted: result });
        } catch (err) {
          return errorResponse(res, err);
        }
      }
    )

    return router;
  }
}

export default new PersonRouter();
