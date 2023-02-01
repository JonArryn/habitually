import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import * as HabitService from './habit.model';
import { failureResponse } from '../../helper/responseObject';

const validateHabitBody = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  body('title').isString(), body('description').isString();

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

const checkId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: number = Number.parseInt(req.params.id, 10);
    const habit = await HabitService.getHabitById(id);
    if (!habit) {
      return res
        .status(400)
        .json(failureResponse('record not found by the provided ID'));
    }
  } catch (error: unknown) {
    res
      .status(500)
      .json(failureResponse(error instanceof Error && error.message));
  }

  next();
};

export { validateHabitBody, checkId };
