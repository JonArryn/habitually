// THIS HOOK IS NOT CURRENTLY BEING USED

import { useState, useEffect, useCallback } from 'react';
import { IHabit } from '../type/HABITS';

export interface IUseHabit {
  getAllHabits: () => IHabit[] | [];
  getCurrentHabit: () => IHabit | undefined;
  manageHabit: (habitId: string) => void;
  createNewHabit: (habit: IHabit) => void;
  currentHabit: IHabit | undefined;
}

export interface IPropsUseHabit {
  habitId: string | undefined;
}

const useHabit = ({ habitId }: IPropsUseHabit): IUseHabit => {
  const [allHabits, setAllHabits] = useState<IHabit[] | []>([]);
  const [currentHabit, setCurrentHabit] = useState<IHabit | undefined>();

  useEffect(() => {
    setAllHabits(() => []);
  }, []);

  const getAllHabits = () => allHabits;

  const manageHabit = useCallback(
    (habitId: string | undefined) => {
      allHabits.forEach((habit) => {
        habit.id === habitId && setCurrentHabit(habit);
      });
    },
    [allHabits]
  );

  useEffect(() => {
    manageHabit(habitId);
  }, [manageHabit, habitId]);
  const getCurrentHabit = () => currentHabit;

  const createNewHabit = (habit: IHabit) => {
    return;
  };

  return {
    getAllHabits,
    getCurrentHabit,
    manageHabit,
    createNewHabit,
    currentHabit,
  };
};

export default useHabit;
