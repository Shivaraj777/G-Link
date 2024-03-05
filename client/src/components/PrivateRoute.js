import React from 'react'
import { useSelector } from 'react-redux';
import { verifyToken } from '../utils';
import { Navigate } from 'react-router-dom';

// PrivateRoute compnent is rendered only when user is logged in
function PrivateRoute({ children }) {
  const auth = useSelector((state) => state.auth);

  if(auth.token && verifyToken()){
    return children;
  }

  return <Navigate replace to='/auth' />
}

export default PrivateRoute;