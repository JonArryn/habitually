import express from 'express';
import db from '../../utils/db.server';

const habitRouter = express.Router();

import * as habitController from './habit.controller';

import { checkId, validateHabitBody } from './habit.middleware';

habitRouter
  .route('/')
  .get(habitController.getAllHabits)
  .post(validateHabitBody, habitController.createHabit);

habitRouter
  .route('/:id')
  .all(checkId)
  .get(habitController.getHabitById)
  .put(validateHabitBody, habitController.updateHabit)
  .delete(habitController.deleteHabit);

export { habitRouter as default };
