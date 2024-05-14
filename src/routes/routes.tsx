import { Navigate, RouteObject } from 'react-router-dom';

import { HOME, HOMEWORKS } from '@constants/routes';
import MainLayout from '@layouts/main-layout/MainLayout';
import DashboardRoutes from '@features/dashboard/routes';
import AuthRoutes from '@features/authentication/routes';
import HomeworkRoutes from '@features/homeworks/routes';

const Routes: RouteObject[] = [
  AuthRoutes,
  {
    path: HOME.HOME,
    element: <Navigate to={HOMEWORKS.HOMEWORKSLIST} /> // Re-route from '/' to '/order-management/orders'
  },
  {
    element: <MainLayout />, // Outlet in MainLayout will be replaced by matching element from below
    children: [...HomeworkRoutes, ...DashboardRoutes]
  }
];

export default Routes;
