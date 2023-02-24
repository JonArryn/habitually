import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { SubMenuItem } from '../../../constant/SUBMENU_ITEMS';
import ActionButton from './ActionButton';
import { Stack } from '@mui/system';

interface IProps {
  subMenuItems: SubMenuItem[];
  pageTitle: string;
}

const SubMenu = ({ subMenuItems, pageTitle }: IProps) => {
  return (
    <Grid container justifyContent='flex-start' alignItems='center' spacing={3}>
      <Grid item>
        <Typography variant='h2'>{pageTitle}</Typography>
      </Grid>
      <Grid item>
        <Stack direction='row'>
          {subMenuItems.map((menuItem) => (
            <ActionButton
              key={menuItem.text}
              text={menuItem.text}
              icon={menuItem.icon}
              route={menuItem.route}
              aria={menuItem.label}
            />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SubMenu;
