import React from 'react';
import styled from 'styled-components';
import Toggler from '../Toggler';
import { NavLink } from 'react-router-dom';
import SignupForm from './SignupForm';

function Signup() {
  return (
    <StyledSignup className='login-page-bg'>
      <div className='toggle-icon'>
        <Toggler />
      </div>

      {/* signup page header section */}
      <div className='h-full flex justify-center items-center'>
        <div className='py-6'>
          <div className='px-8 flex flex-col justify-center items-center'>
            <div className='logo' style={{ width: 'auto' }}>
              <img src='/images/G_Link_Icon.png' alt='app-logo' />
            </div>

            {/* Signup form */}
            <SignupForm />

            {/* signup page footer section */}
            <div className='mt-2 text-center'>
              <p>
                {''}
                <span>Already have an account?</span>
                <NavLink to='/auth' className='text-green-500 font-bold  hover:underline'>
                  {''}
                  Sign In
                </NavLink>
              </p>
              <p>© {new Date().getFullYear()} G-Link created with ❤️</p>
            </div>
          </div>
        </div>
      </div>
    </StyledSignup>
  )
}

// styled component
const StyledSignup = styled.section`
  position: relative;
  width: 100vw;
  height: auto;
  background-color: ${({theme}) => theme.colors.bg.secondary};

  .logo{
    img{
      height: 50px;
    }
  }

  // dark theme toggle-icon
  .toggle-icon{
    position: absolute;
    top: 10px;
    right: 0;
    margin-right: 20px;
    display: flex;
    width: 100vw;
    justify-content: flex-end;
  }

  .auth-page-content{
    height: calc(100% - 48px);
    margin: 24px;
    background-color: ${({theme}) => theme.colors.bg.primary};

    .card{
      border-radius: 0.25rem;
    }

    a{
      color: ${({theme}) => theme.colors.text.secondary};
    }

    input{
      background-color: ${({theme}) => theme.colors.btn.light};
      border-color: ${({theme}) => theme.colors.border};
      &:focus{
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

export default Signup;