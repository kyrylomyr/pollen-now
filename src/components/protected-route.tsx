import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ProtectedRouteProps } from '../types/protected-route-props';
import { NavigateStateObj } from '../types/navigate-state-obj';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAllowed, redirectTo = '/api-key', children }) => {
  const location = useLocation();

  if (!isAllowed) {
    const state: NavigateStateObj = { from: location };
    return <Navigate to={redirectTo} state={state} replace />;
  }

  return (children || <Outlet />) as React.ReactElement;
};

export default ProtectedRoute;
