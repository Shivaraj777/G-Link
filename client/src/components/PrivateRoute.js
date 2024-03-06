import React from 'react'
import { ACCESS_TOKEN_KEY, verifyToken } from '../utils';
import { Navigate } from 'react-router-dom';

// PrivateRoute compnent is rendered only when user is logged in
function PrivateRoute({ children }) {
  if(localStorage[ACCESS_TOKEN_KEY] && verifyToken()){
    return children;
  }

  return <Navigate replace to='/auth' />
}

export default PrivateRoute;