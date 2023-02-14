import express from 'express';

const habitRouter = express.Router();

import * as habitController from './habit.controller';

import {
  checkId,
  validateHabitBody,
  checkForValidationErrors,
} from './habit.middleware';

habitRouter
  .route('/')
  .get(habitController.getAllHabits)
  .post(
    validateHabitBody(),
    checkForValidationErrors,
    habitController.createHabit
  );

habitRouter
  .route('/:id')
  .all(checkId)
  .get(habitController.getHabitById)
  .put(
    validateHabitBody(),
    checkForValidationErrors,
    habitController.updateHabit
  )
  .delete(habitController.deleteHabit);

export { habitRouter as default };
