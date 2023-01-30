import express, { Router } from 'express';

const habitRouter = express.Router();

import * as habitController from './habit.controller';

import { validateHabitBody } from './habit.middleware';

habitRouter
  .route('/')
  .get(habitController.getAllHabits)
  .post(validateHabitBody, habitController.createHabit);

habitRouter
  .route('/:id')
  .get(habitController.getHabitById)
  .put(validateHabitBody, habitController.updateHabit);

export { habitRouter as default };
