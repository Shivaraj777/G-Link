import React, { useEffect, useState } from 'react';
import ToggleShowPassword from '../ToggleShowPassword';
import { Button } from '../../styles/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthStore, signup } from '../../redux/auth/auth.action';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupForm() {
  const [EyeIcon1, InputType1] = ToggleShowPassword(); // get password visibility details
  const [EyeIcon2, InputType2] = ToggleShowPassword();

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); // get dispatch function from store
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth); // get global auth state
  // console.log(auth);

  // state to manage form data
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    confirm_password: ''
  });

  // handle form data change
  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  }


  // handle successfull signup
  useEffect(() => {
    if(!auth){
      return;
    }

    if(auth.success === true){
      setLoading(false);
      toast.success(auth.message, {
        autoClose: 2000
      });

      dispatch(clearAuthStore());
      navigate('/auth');
      // toast.success(auth.message, {
      //   autoClose: 2000
      // });
    }
    
    if(auth.success === false){
      setLoading(false);
      toast.error(auth.message, {
        autoClose: 2000
      });

      dispatch(clearAuthStore());
    }
  }, [auth, navigate, dispatch]);


  // handle user signup
  const handleUserSignup = () => {
    setLoading(true);

    if(signupData.password !== signupData.confirm_password){
      toast.error('Password and Confirm Password do not match. Please try again', {
        autoClose: 2000,
      });
      setLoading(false);
      return;
    }

    if(signupData.name && signupData.email && signupData.password && signupData.confirm_password){
      dispatch(signup(signupData));
      // setLoading(false);
    }else{
      setLoading(false);
      toast.error('Please fill all the required fields', {
        autoClose: 2000
      });
      return;
    }
  }


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
                  value={signupData.name}
                  onChange={handleChange}
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
                  value={signupData.email}
                  onChange={handleChange}
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
                  pattern='[0-9]{10}'
                  required
                  value={signupData.mobile}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='form-item vertical'>
              <label className='form-label mb-2'>Password</label>
              <span className='input-wrapper'>
                <input
                  className='input input-md h-11'
                  type={InputType1}
                  name='password'
                  autoComplete='off'
                  placeholder='Password'
                  style={{ paddingRight: '2.25rem' }}
                  value={signupData.password}
                  onChange={handleChange}
                />
                {EyeIcon1}
              </span>
            </div>

            <div className='form-item vertical'>
              <label className='form-label mb-2'>Confirm Password</label>
              <span className='input-wrapper'>
                <input
                  className='input input-md h-11'
                  type={InputType2}
                  name='confirm_password'
                  autoComplete='off'
                  placeholder='Confirm Password'
                  style={{ paddingRight: '2.25rem' }}
                  value={signupData.confirm_password}
                  onChange={handleChange}
                />
                {EyeIcon2}
              </span>
            </div>

            <Button 
              className='button bg-green-600 hover:bg-green-500 active:bg-green-700 text-white radius-round h-11 px-8 py-2 w-full'
              onClick={handleUserSignup}
              disabled={loading}
            >
              { loading ? 'Registering...' : 'Register' }
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default SignupForm;