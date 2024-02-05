import React from 'react';
import DefaultLayoutHoc from '../layout/DefaultLayoutHoc';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

/* Outlet component renders nested component of AuthPage 
   /auth         -> Login component
   /auth/sign-up -> Signup component
 */
function AuthPage() {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  )
}

export default DefaultLayoutHoc(AuthPage);