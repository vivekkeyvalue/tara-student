import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { SidebarItemProps } from './types';

const SidebarItem = (props: SidebarItemProps) => {
  const { isCurrentRoute, item, path, isSidebarOpen } = props;

  const { id, Icon, label, route } = item;

  const itemBorder = isCurrentRoute ? 'border-r-4 border-primary' : '';
  const itemColor = isCurrentRoute ? 'text-primary' : 'text-grey';

  return (
    <Link
      key={id}
      to={path || route}
      className={`flex items-center gap-3 py-3 pl-6 pr-4 ${itemBorder}`}
    >
      <div>
        <Icon className={clsx('size-6', itemColor)} />
      </div>
      {isSidebarOpen && (
        <span
          className={`truncate pl-2 text-center text-base font-semibold ${itemColor}
      `}
        >
          {label}
        </span>
      )}
    </Link>
  );
};

export default SidebarItem;
