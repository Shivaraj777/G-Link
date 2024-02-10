import React from 'react';
import DefaultLayoutHoc from '../layout/DefaultLayoutHoc';
import { Outlet } from 'react-router-dom';

/* Outlet component renders nested component of AuthPage 
   /auth         -> Login component
   /auth/sign-up -> Signup component
 */
function AuthPage() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default DefaultLayoutHoc(AuthPage);