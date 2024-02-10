import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { clearAuthStore, forgotPasswordScenario } from '../../redux/auth/auth.action';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const auth = useSelector((state) => state.auth);

  // state to manage form data
  const [userData, setUserData] = useState({ email: '' });

  // handle change in form data
  const handleChange = (e) => {
    setUserData((prevState) => ({...prevState, [e.target.name]: e.target.value }));
  }


  // display page status
  useEffect(() => {
    if(auth.message){
      setMessage(auth.message);
      if(!auth.status){
        console.log(auth.message);
      }
    }else{
      console.log('Password Reset mail sent successfully');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.message]);


  // send password reset email
  const sendPasswordResetEmail = () => {
    if(userData.email === '' || userData.email === null){
      console.log('Please enter a valid email');
      return;
    }

    dispatch(forgotPasswordScenario(userData.email));
    setUserData({ email: '' });
  }


  // handle navigate to home page
  const navigateToHome = () => {
    dispatch(clearAuthStore());
    setUserData({ email: '' });
    navigate('/');
  }


  // handle resetting forgot pasword page to resend email
  const handlePageReset = () => {
    dispatch(clearAuthStore());
    setMessage('');
    setUserData({ email: '' });
  }


  return (
    <Wrapper>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='page-content w-full p-6 rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8'>
          <h2 className='mb-1 text-xl font-bold text-center leading-tight tracking-tight md:text-2xl'>
            Forgot Password
          </h2>

          {auth.success ? (
            <>
              <p className='text-center'>{message}</p>
              <button 
                className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                onClick={navigateToHome}
              >
                Home
              </button>
              <button 
                className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                onClick={handlePageReset}
              >
                Resend Password Reset Link
              </button>
            </>) : (

            // form to request reset password link
            <>
              <div className='mt-4 space-y-4 lg:mt-5 md:space-y-5'>
                <div>
                  <label 
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='input input-md h-11 sm:text-sm rounded-lg w-full p-2.5 dark:placeholder-gray-400'
                    placeholder='janedoe@gmail.com'
                    required=''
                    value={userData.email}
                    onChange={handleChange}
                  />
                </div>
                <button 
                  className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  onClick={sendPasswordResetEmail}
                >
                  Reset Password Link
                </button>
              </div>
            </>)
          }
        </div>
      </div>
    </Wrapper>
  )
}

// styled component
const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg.secondary};

  .page-content{
    background-color: ${({ theme }) => theme.colors.bg.primary};

    input{
      background-color: ${({ theme }) => theme.colors.btn.light};
      border-color: ${({ theme }) => theme.colors.border};
      &:focus{
        background-color: ${({ theme }) => theme.colors.btn.light};
        outline-color: ${({ theme }) => theme.colors.btn.light};
        border-color: ${({ theme }) => theme.colors.border};
      }

      p,
      label{
        color: ${({ theme }) => theme.colors.text.secondary};
      }
    }
  }
`;

export default ForgotPassword;