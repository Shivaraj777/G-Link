import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../styles/Button';
import ToggleShowPassword from '../ToggleShowPassword';

function LoginForm() {
  const [EyeIcon, InputType] = ToggleShowPassword(); // get password visibility details

  // login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // handle form input state change
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  } 

  return (
    <>
      <div className='auth-page-content col-span-2 flex flex-col justify-center items-center'>
        <div className='xl:min-w-[450px] px-8'>
          <div className='mb-8'></div>
          <div className='mb-8'>
            <h3 className='mb-1 text-center'>Welcome back</h3>
            <p className='text-center'>Sign in to continue.....</p>
          </div>

          {/* form container */}
          <div className='p-8 card'>
            <div className='form-container vertical mb-2'>
              <div className='form-item vertical'>
                <label className='form-label mb-2'>User Email</label>
                <div>
                  <input
                    className="input input-md h-11"
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='form-item vertical'>
                <div className='mb-2 flex justify-between'>
                  <label className='form-label'>Password</label>
                  <span>
                    <NavLink to='/' className='hover:underline'>
                      Forgot Password?
                    </NavLink>
                  </span>
                </div>
                <div>
                  <span className='input-wrapper'>
                    <input
                      className="input input-md h-11"
                      type={InputType}
                      name="password"
                      autoComplete="off"
                      placeholder="Password"
                      style={{ paddingRight: "2.25rem" }}
                      value={loginData.password}
                      onChange={handleChange}
                    />
                    {EyeIcon}
                  </span>
                </div>
              </div>

              <Button className='button bg-green-600  hover:bg-green-500 active:bg-green-700 text-white radius-round h-11 px-8 py-2 w-full'>
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm;