import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Spinner from '@components/spinner/Spinner';
import AuthLayoutImage from '@assets/images/auth_layout.svg';

const AuthLayout = () => (
  <div className="flex h-screen items-center">
    <section className="relative flex size-full w-0 items-center justify-center bg-primaryLite align-middle sm:w-1/3 md:w-1/2">
      <img
        src={AuthLayoutImage}
        alt="login-layout-pic"
        className="size-full object-contain"
      />
    </section>
    <section className="flex w-full items-center justify-center p-10 sm:w-2/3 md:w-1/2">
      <div className="w-420 m-6 flex flex-col justify-center">
        <Suspense
          fallback={
            <div className="flex size-full items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </section>
  </div>
);

export default AuthLayout;
