// this needs to be refactored to separate the router from the req,res functions, and the current habit.controller file needs to be renamed to habit.model
// habit.types is not being used yet because i am not selecting fields when returning data in responses but creating custom types instead of using prisma generated types is useful if you intend to only return certain data in response, however i'd like to look at extending the prisma types rather than creating them from scratch

import { Request, Response } from 'express';

import * as HabitService from './habit.model';

import { successResponse, failureResponse } from '../../helper/responseObject';

import stringToNumber from '../../helper/stringToNumber';

// GET: all habits

const getAllHabits = async (req: Request, res: Response) => {
  try {
    const habits = await HabitService.getAllHabits();
    res.status(200).json(successResponse(habits));
  } catch (error: unknown) {
    res
      .status(400)
      .json(failureResponse(error instanceof Error && error.message));
  }
};

// GET: habit by id
const getHabitById = async (req: Request, res: Response) => {
  const id: number = stringToNumber(req.params.id);
  try {
    const habit = await HabitService.getHabitById(id);
    res.status(200).json(successResponse(habit));
  } catch (error: unknown) {
    res
      .status(404)
      .json(failureResponse(error instanceof Error && error.message));
  }
};

// POST: create new habit
// PARAMS: title, description
const createHabit = async (req: Request, res: Response) => {
  try {
    const habit = req.body;
    const newHabit = await HabitService.createHabit(habit);
    res.status(201).json(successResponse(newHabit));
  } catch (error: unknown) {
    res
      .status(400)
      .json(failureResponse(error instanceof Error && error.message));
  }
};
// PUT: update habit
// PARAMS: id
const updateHabit = async (req: Request, res: Response) => {
  const id: number = stringToNumber(req.params.id);
  try {
    const newHabitData = req.body;
    const updatedHabit = await HabitService.updateHabit(newHabitData, id);
    res.status(200).json(successResponse(updatedHabit));
  } catch (error: unknown) {
    res
      .status(400)
      .json(failureResponse(error instanceof Error && error.message));
  }
};

const deleteHabit = async (req: Request, res: Response) => {
  const id: number = stringToNumber(req.params.id);

  try {
    await HabitService.deleteHabit(id);
    res.status(204).json(successResponse('Habit deleted successfully'));
  } catch (error: unknown) {
    res
      .status(400)
      .json(failureResponse(error instanceof Error && error.message));
  }
};

export { getAllHabits, getHabitById, createHabit, updateHabit, deleteHabit };
