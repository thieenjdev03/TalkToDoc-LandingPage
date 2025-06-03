import { useRoutes, Navigate } from 'react-router-dom';
import PublicRoutes from './publicRoutes';
import PrivateRoutes from './privateRoute';
import { useAuth } from '../hooks/useAuths';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth(); 

  const routes = isAuthenticated
    ? [...PrivateRoutes, { path: '*', element: <Navigate to="/" /> }]
    : [...PublicRoutes, { path: '*', element: <Navigate to="/login" /> }];

  return useRoutes(routes);
};

export default AppRoutes;
