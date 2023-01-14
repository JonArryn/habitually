import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';

import TopNav from './TopNav';

const RootLayout = () => {
  return (
    <>
      <CssBaseline />
      <Grid container direction='column' spacing={3}>
        {/* TOP NAV */}
        <Grid item>
          <nav>
            <TopNav />
          </nav>
        </Grid>

        {/* APP */}
        <Grid item>
          <main>
            <Outlet />
          </main>
        </Grid>
      </Grid>
    </>
  );
};

export default RootLayout;
