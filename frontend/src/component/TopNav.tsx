import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import mainNavbarItems from '../constant/NAVBAR';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';

export default function TopNav() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container spacing={3}>
            {mainNavbarItems.map((item) => (
              <Grid item key={item.id}>
                <Link
                  onClick={() => navigate(item.route)}
                  component={Button}
                  sx={{ color: 'white' }}
                >
                  {item.label}
                </Link>
              </Grid>
            ))}
          </Grid>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
