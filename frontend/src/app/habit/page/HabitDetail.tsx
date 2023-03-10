import IHabit from '../../../type/HABIT';
import { useState, useEffect, useCallback } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import habituallyApi from '../../../util/axiosHabit';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import AlertModalButton from '../../component/AlertModalButton';

const HabitDetail = () => {
  const [habit, setHabit] = useState<IHabit>({
    id: '',
    title: '',
    description: '',
  });
  const [detailsDisabled, setDetailsDisabled] = useState(true);

  const { habitId } = useParams();
  const navigate = useNavigate();

  const getHabitByIdParam = useCallback(async () => {
    try {
      const habitResponse = await habituallyApi.get(`/habit/${habitId}`);
      const habitData: IHabit = habitResponse.data.data;
      const { id, title, description } = habitData;
      setHabit({ id, title, description });
    } catch (error: any) {
      navigate('../../error');
    }
  }, [habitId, navigate]);

  const deleteHabit = async (habitId: string) => {
    try {
      await habituallyApi.delete(`/habit/${habitId}`);
      alert('habit deleted');
      navigate('/habit');
    } catch (error) {
      alert('something went wrong deleting habit');
    }
  };

  useEffect(() => {
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
    try {
      await habituallyApi.put(`/habit/${habitId}`, {
        title: habit.title,
        description: habit.description,
      });
      alert('Habit updated successfully');
      setDetailsDisabled(() => true);
    } catch (error) {
      alert('Habit update failed for some reason');
    }
  };

  const ConfirmDeleteButton = () => {
    return (
      <AlertModalButton
        buttonVariant='contained'
        buttonText='delete habit'
        buttonColor='error'
        alertDescription='confirm delete habit'
        alertTitle='Delete Habit'
        alertBody={`This will permanently delete the selected habit ${habit.title}. Are you sure you want to do this?`}
        alertConfirmAction={() => habitId && deleteHabit(habitId)}
      />
    );
  };

  return (
    <>
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
                key='habit-title'
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
                key='habit-description'
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
              onClick={handleSaveClick}
            >
              Save
            </Button>
          </Stack>
        </Paper>
      </Box>
      <ConfirmDeleteButton />
    </>
  );
};

export default HabitDetail;
