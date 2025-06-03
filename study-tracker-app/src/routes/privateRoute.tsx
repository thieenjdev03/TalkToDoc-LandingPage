import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home/Homepage';
import StudySession from '../pages/StudySession/StudySeason';
import Subjects from '../pages/Subjects/Subjects';
import Statistics from '../pages/Statistics/Statistics';
import Profile from '../pages/Profile/Profile';
import MainLayout from '../Layout/MainLayout';

const PrivateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sessions', element: <StudySession /> },
      { path: 'subjects', element: <Subjects /> },
      { path: 'statistics', element: <Statistics /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
];

export default PrivateRoutes;
