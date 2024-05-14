import { ReactComponent as DashboardIcon } from '@assets/icons/dashboard.svg';
import { ReactComponent as HomeWorkIcon } from '@assets/icons/homework.svg';
import { DASHBOARD, HOMEWORKS } from './routes';

const MENU_ITEMS = [
  {
    id: 1,
    Icon: DashboardIcon,
    label: 'Home',
    route: DASHBOARD.DASHBOARD
  },
  {
    id: 2,
    Icon: HomeWorkIcon,
    label: 'HomeWorks',
    route: HOMEWORKS.HOMEWORKSLIST
  }
];

export default MENU_ITEMS;
