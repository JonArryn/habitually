// this needs to be refactored to separate the router from the req,res functions, and the current habit.controller file needs to be renamed to habit.model
// habit.types is not being used yet because i am not selecting fields when returning data in responses but creating custom types instead of using prisma generated types is useful if you intend to only return certain data in response, however i'd like to look at extending the prisma types rather than creating them from scratch

import { Request, Response } from 'express';

import * as HabitService from './habit.model';

import { successResponse, failureResponse } from '../helper/responseObject';

// GET: all habits

const getAllHabits = async (req: Request, res: Response) => {
  try {
    const habits = await HabitService.getAllHabits();
    res.status(200).json(successResponse(habits));
  } catch (error: any) {
    res.status(400).json(failureResponse(error.message));
  }
};

// GET: habit by id
const getHabitById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    const habit = await HabitService.getHabitById(id);
    res.status(200).json(successResponse(habit));
  } catch (error: any) {
    res.status(404).json(failureResponse(error.message));
  }
};

// POST: create new habit
// PARAMS: title, description
const createHabit = async (req: Request, res: Response) => {
  try {
    const habit = req.body;
    const newHabit = await HabitService.createHabit(habit);
    res.status(201).json(successResponse(newHabit));
  } catch (error: any) {
    res.status(400).json(failureResponse(error.message));
  }
};
// PUT: update habit
// PARAMS: id
const updateHabit = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params?.id, 10);
  try {
    const habit = req.body;
    const updatedHabit = await HabitService.updateHabit(habit, id);
    res.status(200).json(successResponse(updatedHabit));
  } catch (error: any) {
    res.status(400).json(failureResponse(error.message));
  }
};
export { getAllHabits, getHabitById, createHabit, updateHabit };
