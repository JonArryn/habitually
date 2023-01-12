import ROUTES from './ROUTES';

import AddIcon from '@mui/icons-material/Add';
import { ReactNode } from 'react';

export interface SubMenuItem {
  text: string;
  icon: ReactNode;
  route: string;
}

export type SubMenuItemObject = {
  [value in ROUTES]: SubMenuItem[];
};

const SUBMENU_ITEMS: SubMenuItemObject = {
  [ROUTES.HABIT]: [
    {
      text: 'New Habit',
      icon: <AddIcon sx={{ mr: 1 }} />,
      route: '/habit/create',
    },
  ],
  [ROUTES.UNHABIT]: [
    {
      text: 'New UnHabit',
      icon: <AddIcon sx={{ mr: 1 }} />,
      route: '/unhabit/create',
    },
  ],
  [ROUTES.ROUTINE]: [
    {
      text: 'New Routine',
      icon: <AddIcon sx={{ mr: 1 }} />,
      route: '/routine/create',
    },
  ],
  [ROUTES.TASK]: [
    {
      text: 'New Task',
      icon: <AddIcon sx={{ mr: 1 }} />,
      route: '/task/create',
    },
  ],
};

export default SUBMENU_ITEMS;
