import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const validateHabitBody = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  body('title').isString(), body('description').isString();

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

export { validateHabitBody };
