// THIS PROVIDER AND ASSOCIATED HOOK ARE NOT BEING USED YET
// TO BE REFACTORED FOR BETTER REUSABILITY OR REMOVED

import React, { createContext, ReactNode } from 'react';
import useHabit, { IUseHabit } from '../hook/useHabit';

const HabitContext = createContext<IUseHabit | undefined>(undefined);

interface IProps {
  children: ReactNode;
  habitId: string | undefined;
}

const HabitProvider = ({ children, habitId }: IProps) => {
  return (
    <HabitContext.Provider value={useHabit({ habitId })}>
      {children}
    </HabitContext.Provider>
  );
};

export { HabitContext as default, HabitProvider };
