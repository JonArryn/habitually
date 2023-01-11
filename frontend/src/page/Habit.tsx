import Grid from '@mui/material/Grid';
import HabitCard from '../component/HabitCard';
import SubMenu from '../component/SubMenu';
import habits from '../constant/HABITS';
import SUBMENU_ITEMS from '../constant/SUBMENU_ITEMS';

const Habit = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ mx: '3px', mb: '10px' }}
        direction='column'
      >
        <Grid item>
          <SubMenu subMenuItems={SUBMENU_ITEMS['/habit']} />
        </Grid>
        <Grid item>
          <Grid container>
            {habits.map((habit) => {
              return (
                <Grid item key={habit.id}>
                  <HabitCard habitData={habit} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Habit;
