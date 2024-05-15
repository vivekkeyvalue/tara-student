import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { HOMEWORKS } from '@constants/routes';

const HomeWorks = lazy(
  () => import('@features/homeworks/pages/homeworks/Homeworks')
);

export const HomeworkRoutes: RouteObject[] = [
  {
    path: HOMEWORKS.HOMEWORKSLIST,
    element: <HomeWorks />
  }
];

export default HomeworkRoutes;
