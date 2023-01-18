import { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import HabitContext from '../../context/HabitProvider';

const HabitDetail = () => {
  const habitContext = useContext(HabitContext);

  const currentHabit = habitContext?.getCurrentHabit();

  console.log(habitContext?.getCurrentHabit());
  console.log(currentHabit);

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField id='habit-title' label='Habit Title' variant='outlined'>
        {currentHabit && currentHabit.title}
      </TextField>
      <TextField
        id='habit-description'
        label='Habit Description'
        variant='outlined'
      ></TextField>
    </Box>
  );
};

export default HabitDetail;
