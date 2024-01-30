import React from 'react';
import ToggleShowPassword from '../ToggleShowPassword';
import { Button } from '../../styles/Button';

function SignupForm() {
  const [EyeIcon, InputType] = ToggleShowPassword(); // get password visibility details

  return (
    <div className='auth-page-content col-span-2 flex flex-col justify-center items-center'>
      <div className='xl:min-w-[450px] px-8'>
        <div className='mb-8'></div>

        {/* Signup form header */}
        <div className='mb-8'>
          <h3 className="mb-1 text-center">Sign up</h3>
          <p className="text-center">Get your free G-Link account now..</p>
        </div>

        {/* form-container */}
        <div className='px-8 pb-8 card'>
          <div className='form-container vertical'>
            <div className='form-item vertical'>
              <label className='form-label mb-2'>Name</label>
              <div>
                <input 
                  className='input input-md h-11'
                  type='text'
                  name='name'
                  autoComplete='off'
                  placeholder='Name'
                  required
                />
              </div>
            </div>

            <div className='form-item vertical'>
              <label className='form-label mb-2'>Email</label>
              <div>
                <input 
                  className='input input-md h-11'
                  type='email'
                  name='email'
                  autoComplete='off'
                  placeholder='Email'
                  required
                />
              </div>
            </div>

            <div className='form-item vertical'>
              <label className='form-label mb-2'>Mobile</label>
              <div>
                <input 
                  className='input input-md h-11'
                  type='tel'
                  name='contact'
                  autoComplete='off'
                  placeholder='+91-phone no..'
                  required
                />
              </div>
            </div>

            <div className='form-item vertical'>
              <label className='form-label mb-2'>Password</label>
              <span className='input-wrapper'>
                <input
                  className='input input-md h-11'
                  type={InputType}
                  name='password'
                  autoComplete='off'
                  placeholder='Password'
                  style={{ paddingRight: '2.25rem' }}
                />
                {EyeIcon}
              </span>
            </div>

            <div className='form-item vertical'>
              <label className='form-label mb-2'>Confirm Password</label>
              <span className='input-wrapper'>
                <input
                  className='input input-md h-11'
                  type={InputType}
                  name='confirm-password'
                  autoComplete='off'
                  placeholder='Confirm Password'
                  style={{ paddingRight: '2.25rem' }}
                />
                {EyeIcon}
              </span>
            </div>

            <Button className='button bg-green-600 hover:bg-green-500 active:bg-green-700 text-white radius-round h-11 px-8 py-2 w-full'>
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupForm;