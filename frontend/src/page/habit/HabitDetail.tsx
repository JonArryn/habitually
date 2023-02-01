import { IHabit } from '../../type/HABITS';
import { useState, useEffect, useCallback } from 'react';

import { useParams } from 'react-router-dom';

import habituallyApi from '../../util/axiosHabit';
import axios from 'axios';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

const HabitDetail = () => {
  const [habit, setHabit] = useState<IHabit>({
    id: '',
    title: '',
    description: '',
  });
  const [detailsDisabled, setDetailsDisabled] = useState(true);

  const { habitId } = useParams();

  const getHabitByIdParam = useCallback(async () => {
    const habitResponse = await habituallyApi.get(`/habit/${habitId}`);
    const habitData: IHabit = habitResponse.data.data;
    const { id, title, description } = habitData;
    setHabit(() => {
      return { id, title, description };
    });
  }, [habitId]);

  useEffect(() => {
    console.log('get habit UE');
    getHabitByIdParam();
  }, [getHabitByIdParam]);

  const handleEditClick = () => {
    setDetailsDisabled((prev) => !prev);
  };

  const handleCancelClick = () => {
    setDetailsDisabled(true);
    getHabitByIdParam();
  };

  const handleSaveClick = async () => {
    await habituallyApi.put(`/habit/${habitId}`, {
      title: habit.title,
      description: habit.description,
    });
    setDetailsDisabled(() => true);
  };

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '40ch', p: '2ch' },
      }}
      noValidate
      autoComplete='on'
    >
      <Paper elevation={3}>
        <Stack spacing={3} sx={{ mb: '10px' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: '10px' }}>
            <Grid container justifyContent='space-between' sx={{ mb: '5px' }}>
              <Grid item>
                <Typography variant='h6'>Details</Typography>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  color='secondary'
                  size='small'
                  disabled={!detailsDisabled}
                  onClick={handleEditClick}
                >
                  Edit
                </Button>
              </Grid>
            </Grid>
          </Box>
          <FormControl>
            <TextField
              id='habit-title'
              value={habit?.title}
              label='Habit Title'
              disabled={detailsDisabled}
              variant={detailsDisabled ? 'filled' : 'outlined'}
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
              disabled={detailsDisabled}
              variant={detailsDisabled ? 'filled' : 'outlined'}
              onChange={(event) => {
                setHabit((prev) => {
                  return { ...prev, description: event.target.value };
                });
              }}
            />
          </FormControl>
        </Stack>
        <Stack direction='row' spacing={2} justifyContent='flex-end'>
          <Button
            variant='text'
            disabled={detailsDisabled}
            color='error'
            onClick={handleCancelClick}
          >
            Cancel
          </Button>
          <Button
            variant='contained'
            disabled={detailsDisabled}
            onClick={() => handleSaveClick()}
          >
            Save
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default HabitDetail;
