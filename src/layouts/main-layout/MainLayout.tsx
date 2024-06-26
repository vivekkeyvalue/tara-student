import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Spinner } from '@components';
import SideNavBar from '@layouts/side-nav/SIdeNav';
import MainHeader from '@layouts/main-header/MainHeader';

const MainLayout = () => (
  <div className="flex h-screen w-screen overflow-hidden">
    <div className="size-full">
      <MainHeader />
      <SideNavBar />
      <div className="h-screen overflow-y-auto bg-primaryLite pb-85">
        <div className="wrapper">
          <Suspense
            fallback={
              <div className="absolute top-1/2 flex size-full -translate-y-1/2 items-center justify-center">
                <Spinner />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  </div>
);

export default MainLayout;
