import Box from '@mui/system/Box';
import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import habituallyApi from '../../../util/axiosHabit';
import { useState } from 'react';
import IHabit from '../../../type/HABIT';
import { useNavigate } from 'react-router-dom';

const NewHabit = () => {
  const [habit, setHabit] = useState<IHabit>({
    id: '',
    title: '',
    description: '',
  });
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/habit');
  };
  const handleSaveClick = async () => {
    try {
      const newHabitResponse = await habituallyApi.post('/habit', {
        title: habit.title,
        description: habit.description,
      });
      console.log(newHabitResponse);

      navigate(`/habit/${newHabitResponse.data.data.id}`);
    } catch (error: unknown) {
      alert('There was an error creating the new habit');
    }
  };

  return (
    <>
      <Typography variant='h3' component='h2' sx={{ mb: '25px' }}>
        New Habit
      </Typography>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '40ch', p: '2ch' },
        }}
        noValidate
        autoComplete='on'
      >
        <Paper elevation={3}>
          <Stack spacing={3}>
            <Typography variant='h6'>Details</Typography>
            <FormControl>
              <TextField
                id='habit-title'
                value={habit?.title}
                label='Habit Title'
                variant='outlined'
                onChange={(event) => {
                  setHabit((prev) => {
                    return { ...prev, title: event.target.value };
                  });
                }}
              />
            </FormControl>
            <FormControl>
              <TextField
                id='habit-description'
                label='Habit Description'
                multiline
                rows={4}
                value={habit?.description}
                variant='outlined'
                onChange={(event) => {
                  setHabit((prev) => {
                    return { ...prev, description: event.target.value };
                  });
                }}
              />
            </FormControl>
            <Stack direction='row' spacing={2} justifyContent='flex-end'>
              <Button variant='text' color='error' onClick={handleCancelClick}>
                Cancel
              </Button>
              <Button variant='contained' onClick={handleSaveClick}>
                Save
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default NewHabit;
