import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { ReactNode } from 'react';

interface IProps {
  text?: string;
  icon?: ReactNode;
}

export default function ActionButton({
  text = 'Action',
  icon = <NavigationIcon sx={{ mr: 1 }} />,
}: IProps) {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1 },
      }}
    >
      <Fab variant='extended' size='medium' color='primary' aria-label='add'>
        {icon}
        {text}
      </Fab>
    </Box>
  );
}
