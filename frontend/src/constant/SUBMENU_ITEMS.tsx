import ROUTES from './ROUTES';

import AddIcon from '@mui/icons-material/Add';
import { ReactNode } from 'react';
import { Home } from '@mui/icons-material';

export interface SubMenuItem {
  text: string;
  icon: ReactNode;
  route: string;
  label: string;
}

export type SubMenuItemObject = {
  [value in ROUTES]: SubMenuItem[];
};

const SUBMENU_ITEMS: SubMenuItemObject = {
  [ROUTES.HABIT]: [
    {
      text: 'Habits Home',
      icon: <Home sx={{ mr: 1 }} />,
      route: '/habit',
      label: 'habits-home',
    },
    {
      text: 'New Habit',
      icon: <AddIcon sx={{ mr: 1 }} />,
      route: '/habit/create',
      label: 'new-habit',
    },
  ],
  [ROUTES.UNHABIT]: [
    {
      text: 'New UnHabit',
      icon: <AddIcon sx={{ mr: 1 }} />,
      route: '/unhabit/create',
      label: 'new-un-habit',
    },
  ],
  [ROUTES.ROUTINE]: [
    {
      text: 'New Routine',
      icon: <AddIcon sx={{ mr: 1 }} />,
      route: '/routine/create',
      label: 'new-routine',
    },
  ],
  [ROUTES.TASK]: [
    {
      text: 'New Task',
      icon: <AddIcon sx={{ mr: 1 }} />,
      route: '/task/create',
      label: 'new-task',
    },
  ],
};

export default SUBMENU_ITEMS;
