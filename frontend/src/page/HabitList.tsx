import Grid from '@mui/material/Grid';
import React from 'react';
import HabitCard from '../component/HabitCard';
import habits from '../constant/HABITS';

const HabitList = () => {
  return (
    <Grid container spacing={2}>
      {habits.map((habit) => {
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
