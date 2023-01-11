import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import TopNav from './component/TopNav';

function App() {
  return (
    <>
      <CssBaseline />
      <Grid container direction='column' spacing={3}>
        {/* TOP NAV */}
        <Grid item>
          <TopNav />
        </Grid>

        {/* APP */}
        <Grid item>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
