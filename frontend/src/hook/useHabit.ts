import { useState, useEffect, useRef, useCallback } from 'react';
import habits, { IHabit } from '../constant/HABITS';
import { useParams } from 'react-router-dom';

export interface IUseHabit {
  getAllHabits: () => IHabit[] | [];
  getCurrentHabit: () => IHabit | undefined;
  manageHabit: (habitId: string) => void;
  createNewHabit: (habit: IHabit) => void;
}

const useHabit = (): IUseHabit => {
  const [allHabits, setAllHabits] = useState<IHabit[] | []>([]);
  const [currentHabit, setCurrentHabit] = useState<IHabit | undefined>();

  const habitIdRef = useRef(useParams().habitId);

  useEffect(() => {
    setAllHabits(() => habits);
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
    console.log('set current');
    manageHabit(habitIdRef.current);
  }, [manageHabit]);
  const getCurrentHabit = () => currentHabit;

  const createNewHabit = (habit: IHabit) => {
    habits.push(habit);
    return;
  };

  return { getAllHabits, getCurrentHabit, manageHabit, createNewHabit };
};

export default useHabit;
