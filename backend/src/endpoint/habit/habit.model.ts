import db from '../../utils/db.server';
import { Habit } from '@prisma/client';

const getAllHabits = async (): Promise<Habit[]> => {
  return db.habit.findMany({});
};

const getHabitById = async (id: number): Promise<Habit | null> => {
  return db.habit.findUnique({
    where: {
      id: id,
    },
  });
};

const createHabit = async (habit: Omit<Habit, 'id'>): Promise<Habit> => {
  const { title, description } = habit;
  return await db.habit.create({
    data: {
      title: title,
      description: description,
      user_id: 1,
    },
  });
};

const updateHabit = async (
  habit: Omit<Habit, 'id'>,
  id: number
): Promise<Habit> => {
  const { title, description } = habit;
  return await db.habit.update({
    where: { id: id },
    data: { title: title, description: description },
  });
};

const deleteHabit = async (id: number): Promise<void> => {
  await db.habit.delete({
    where: { id: id },
  });
};

export { getAllHabits, getHabitById, createHabit, updateHabit, deleteHabit };
