import React from 'react';
import styled from 'styled-components';
import Toggler from '../Toggler';
import { NavLink } from 'react-router-dom';
import LoginForm from './LoginForm';

function Login() {
  return (
    <StyledLogin className='login-page-bg'>
      <div className='toggle-icon'>
        <Toggler />
      </div>

      {/* Login page header section */}
      <div className='relative h-full flex justify-center items-center'>
        <div className='h-full py-6'>
          <div className='px-8 flex flex-col justify-center items-center'>
            <div className='logo' style={{ width: 'auto'}}>
              <img src='/images/G_Link_Icon.png' alt='app-logo' />
            </div>

            {/* Login form */}
            <LoginForm />

            {/* Login page footer-section */}
            <div className='mt-6 text-center'>
              <p>
                <span>Don't have an account?</span>
                <NavLink to='/auth/sign-up' className='text-green-500 font-bold hover:underline'>
                  Sign Up
                </NavLink>
              </p>
              <p>© {new Date().getFullYear()} G-Link created with ❤️ </p>
            </div>
          </div>
        </div>
      </div>
    </StyledLogin>
  )
}

// styled component
const StyledLogin = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.bg.secondary};

  // dark theme toggle-icon
  .toggle-icon{
    position: absolute;
    top: 10px;
    right: 0;
    margin-right: 20px;
    display: flex;
    width: 100vw;
    font-size: 2rem;
    justify-content: flex-end;
  }

  .logo{
    img{
      height: 50px;
    }
  }

  .auth-page-content{
    border-radius: 16px;
    margin: 24px 0;
    background-color: ${({theme}) => theme.colors.bg.primary};

    a{
      color: ${({theme}) => theme.colors.text.secondary};
    }

    input{
      background-color: ${({theme}) => theme.colors.btn.light};
      border-color: ${({theme}) => theme.colors.border};
      &:focus {
        background-color: ${({theme}) => theme.colors.btn.light};
        outline-color: ${({theme}) => theme.colors.btn.light};
        border-color: ${({theme}) => theme.colors.border};
      }
    }

    p,
    label{
      color: ${({theme}) => theme.colors.text.secondary};
    }
  }

  .signin-other-title{
    position: relative;
    &:after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      right: 0;
      top: 15px;
    }

    .title{
      display: inline-block;
      position: relative;
      z-index: 9;
      padding: 2px 16px;
    }
  }
`;

export default Login;