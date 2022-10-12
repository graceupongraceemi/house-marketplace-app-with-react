import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';

const PrivateRoute = () => {
  // const loggedIn = false;
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <h3>Loading...</h3>;
  }

  // Outlet allows child element to return
  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />;
};

export default PrivateRoute;
