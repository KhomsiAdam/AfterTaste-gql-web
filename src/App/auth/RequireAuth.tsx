import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '@/context/AuthProvider';

export function RequireAuth({ allowedRoles }: any) {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  return allowedRoles?.includes(auth?.role) ? (
    <Outlet />
  ) :  (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
  // return allowedRoles?.includes(auth?.role) ? (
  //   <Outlet />
  // ) : auth?.token ? (
  //   <Navigate to="/unauthorized" state={{ from: location }} replace />
  // ) : (
  //   <Navigate to="/login" state={{ from: location }} replace />
  // );
}
