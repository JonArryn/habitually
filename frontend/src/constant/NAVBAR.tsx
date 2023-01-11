import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import DnsIcon from '@mui/icons-material/Dns';

const mainNavbarItems = [
  {
    id: 0,
    icon: <PeopleIcon />,
    label: 'Home',
    route: '/',
  },
  {
    id: 1,
    icon: <DnsIcon />,
    label: 'Habits',
    route: 'habit',
  },
  {
    id: 3,
    icon: <PublicIcon />,
    label: 'Unhabits',
    route: 'unhabit',
  },
  {
    id: 2,
    icon: <ImageIcon />,
    label: 'Routines',
    route: 'routine',
  },
  {
    id: 4,
    icon: <SettingsEthernetIcon />,
    label: 'Tasks',
    route: 'task',
  },
];

export default mainNavbarItems;
