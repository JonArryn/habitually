import TextField from '@mui/material/TextField';
import { IHabit } from '../constant/HABITS';

interface IProps {
  habit?: IHabit;
}

const HabitDetail = ({ habit }: IProps) => {
  return (
    <form>
      <TextField variant='outlined'></TextField>
    </form>
  );
};

export default HabitDetail;
