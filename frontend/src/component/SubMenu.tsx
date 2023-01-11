import Grid from '@mui/material/Grid';
import { SubMenuItem } from '../constant/SUBMENU_ITEMS';
import ActionButton from './common/ActionButton';

interface IProps {
  subMenuItems: SubMenuItem[];
}

const SubMenu = ({ subMenuItems }: IProps) => {
  return (
    <Grid container>
      {subMenuItems.map((menuItem) => (
        <Grid item>
          <ActionButton text={menuItem.text} icon={menuItem.icon} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SubMenu;
