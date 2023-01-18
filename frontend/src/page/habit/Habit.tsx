import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
import SubMenu from '../../component/common/SubMenu';
import SUBMENU_ITEMS from '../../constant/SUBMENU_ITEMS';

import { HabitProvider } from '../../context/HabitProvider';

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
          <HabitProvider>
            <Outlet />
          </HabitProvider>
        </Grid>
      </Grid>
    </>
  );
};

export default Habit;
