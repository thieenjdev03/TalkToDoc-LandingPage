import { RouteObject } from 'react-router-dom';
import LoginPage from '../pages/LoginRegis/login';
import RegisterPage from '../pages/LoginRegis/register';

const PublicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
];

export default PublicRoutes;
