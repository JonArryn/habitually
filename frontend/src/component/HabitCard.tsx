import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { IHabit } from '../constant/HABITS';

interface IProps {
  habitData: IHabit;
}

const HabitCard = ({ habitData }: IProps) => {
  const { id, title, description } = habitData;
  const navigate = useNavigate();
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        <CardContent>
          <Typography variant='h5' component='div' sx={{ mb: '10px' }}>
            {title}
          </Typography>
          <Typography sx={{ mb: '10px' }}>{description}</Typography>
          <Typography>Habit Schedule Placeholder</Typography>
        </CardContent>
        <CardActions>
          <Button size='small' onClick={() => navigate(`${id}`)}>
            Manage
          </Button>
          <Button size='small' sx={{ color: 'red' }}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default HabitCard;
