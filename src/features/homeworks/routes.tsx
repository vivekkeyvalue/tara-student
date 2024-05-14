import { HOMEWORKS } from '@constants/routes';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomeWorks = lazy(
  () => import('@features/homeworks/pages/homeworks/HomeWorks')
);

export const HomeworkRoutes: RouteObject[] = [
  {
    path: HOMEWORKS.HOMEWORKSLIST,
    element: <HomeWorks />
  }
];

export default HomeworkRoutes;
