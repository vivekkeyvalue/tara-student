import { useLocation } from 'react-router-dom';

import { SidebarItem } from '@components';
import MENU_ITEMS from '@constants/sideMenu';
import { useState } from 'react';

const SideNavBar = () => {
  const location = useLocation();

  const [isSidebarOpen, setSideBarOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setSideBarOpen(true);
  };

  const closeSidebar = () => {
    setSideBarOpen(false);
  };

  return (
    <div
      onMouseEnter={openSidebar}
      onMouseLeave={closeSidebar}
      className={`top-65 absolute left-0 z-50 h-[calc(100vh-85px)] bg-theme shadow-sm transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'w-270' : 'w-72'
      }`}
    >
      <div className="mt-6 flex flex-col gap-3 py-3">
        {MENU_ITEMS.map((item: any) => {
          const { route } = item;
          const isCurrentRoute = location.pathname.startsWith(route);
          const path = route;

          return (
            <SidebarItem
              key={item.label}
              item={item}
              path={path}
              isCurrentRoute={isCurrentRoute}
              isSidebarOpen={isSidebarOpen}
            />
          );
        })}
      </div>
    </div>
  );
};
export default SideNavBar;
