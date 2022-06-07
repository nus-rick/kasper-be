import { Response } from 'express';

export const successResponse = (res: Response, data: any) => {
  return res.status(200).json({ status: 'success', data })
}

export const errorResponse = (res: Response, error: Error) => {
  return res.status(200).json({ status: 'error', message: error.message, stack: error.stack })
}
