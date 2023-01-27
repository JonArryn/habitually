// this needs to be refactored to separate the router from the req,res functions, and the current habit.controller file needs to be renamed to habit.model
// habit.types is not being used yet because i am not selecting fields when returning data in responses but creating custom types instead of using prisma generated types is useful if you intend to only return certain data in response, however i'd like to look at extending the prisma types rather than creating them from scratch

import express, { response } from 'express';

import { body, validationResult } from 'express-validator';

import * as HabitService from './habit.controller';

import { Habit } from '@prisma/client';

const habitRouter = express.Router();

// GET: all habits

habitRouter.get('/', async (req, res) => {
  try {
    const habits = await HabitService.getAllHabits();
    return res.status(200).json(habits);
  } catch (error: any) {
    return res.status(400).json(error.message);
  }
});

// GET: habit by id
habitRouter.get('/:id', async (req, res) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    const habit = await HabitService.getHabitById(id);
    if (habit) {
      return res.status(200).json(habit);
    } else {
      return res.status(404).json('No habit found by the provided id');
    }
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

// POST: create new habit
// PARAMS: title, description
habitRouter.post(
  '/',
  body('title').isString(),
  body('description').isString(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const habit = req.body;
      const newHabit = await HabitService.createHabit(habit);
      return res.status(201).json(newHabit);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
);

// PUT: update habit
// PARAMS: id
habitRouter.put(
  '/:id',
  body('title').isString(),
  body('description').isString(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id: number = parseInt(req.params?.id, 10);
    try {
      const habit = req.body;
      const updatedHabit = await HabitService.updateHabit(habit, id);
      return res.status(200).json(updatedHabit);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
);

export { habitRouter as default };
