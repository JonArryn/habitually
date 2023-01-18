import Grid from '@mui/material/Grid';
import React, { useContext } from 'react';
import HabitCard from '../../component/HabitCard';

import HabitContext from '../../context/HabitProvider';

const HabitList = () => {
  const habitContext = useContext(HabitContext);

  const allHabits = habitContext?.getAllHabits();

  return (
    <Grid container spacing={2}>
      {allHabits &&
        allHabits.map((habit) => {
          return (
            <Grid item key={habit.id}>
              <HabitCard habitData={habit} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default HabitList;
