import { useState, useEffect } from 'react';
import habits, { IHabit } from '../constant/HABITS';

export interface IUseHabit {
  getAllHabits: () => IHabit[] | [];
  getCurrentHabit: () => IHabit | undefined;
  manageHabit: (habitId: string) => void;
  createNewHabit: (habit: IHabit) => void;
}

const useHabit = (): IUseHabit => {
  const [allHabits, setAllHabits] = useState<IHabit[] | []>([]);
  const [currentHabit, setCurrentHabit] = useState<IHabit | undefined>();

  useEffect(() => {
    setAllHabits(() => habits);
  }, []);

  const getAllHabits = () => allHabits;

  const manageHabit = (habitId: string) => {
    allHabits.forEach((habit) => {
      habit.id === habitId && setCurrentHabit(habit);
    });
  };

  const getCurrentHabit = () => currentHabit;

  const createNewHabit = (habit: IHabit) => {
    habits.push(habit);
    return;
  };

  return { getAllHabits, getCurrentHabit, manageHabit, createNewHabit };
};

export default useHabit;
