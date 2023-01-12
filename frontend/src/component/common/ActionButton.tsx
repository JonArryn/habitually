import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  text?: string;
  icon?: ReactNode;
  route?: string;
}

export default function ActionButton({
  text = 'Action',
  icon = <NavigationIcon sx={{ mr: 1 }} />,
  route,
}: IProps) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1 },
      }}
    >
      <Fab
        variant='extended'
        size='medium'
        color='primary'
        aria-label='add'
        onClick={() => navigate(`${route}`)}
      >
        {icon}
        {text}
      </Fab>
    </Box>
  );
}
