import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { SubMenuItem } from '../../constant/SUBMENU_ITEMS';
import ActionButton from './ActionButton';

interface IProps {
  subMenuItems: SubMenuItem[];
  pageTitle: string;
}

const SubMenu = ({ subMenuItems, pageTitle }: IProps) => {
  return (
    <Grid container justifyContent='space-between'>
      <Grid item>
        <Typography variant='h2'>{pageTitle}</Typography>
      </Grid>
      <Grid item>
        <Grid container>
          {subMenuItems.map((menuItem) => (
            <Grid item key={menuItem.text}>
              <ActionButton
                text={menuItem.text}
                icon={menuItem.icon}
                route={menuItem.route}
                aria={menuItem.label}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SubMenu;
