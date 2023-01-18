import React, { createContext, ReactNode } from 'react';
import useHabit, { IUseHabit } from '../hook/useHabit';

const HabitContext = createContext<IUseHabit | undefined>(undefined);

const HabitProvider = ({ children }: { children: ReactNode }) => {
  return (
    <HabitContext.Provider value={useHabit()}>{children}</HabitContext.Provider>
  );
};

export { HabitContext as default, HabitProvider };
