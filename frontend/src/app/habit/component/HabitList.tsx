import Grid from '@mui/material/Grid';
import HabitCard from './HabitCard';
import IHabit from '../../../type/HABIT';
import { useState, useEffect } from 'react';
import habituallyApi from '../../../util/axiosHabit';

const HabitList = () => {
  const [habits, setHabits] = useState<IHabit[]>([]);

  const getHabits = async () => {
    const habitResponse = await habituallyApi.get('/habit');
    const habitList: IHabit[] = habitResponse.data.data;
    setHabits(habitList);
  };

  useEffect(() => {
    getHabits();
  }, []);

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
