import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { clearAuthStore, resetUserPassword } from '../../redux/auth/auth.action';
import { toast } from 'react-toastify';

function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  const [message, setMessage] = useState('');

  const auth = useSelector((state) => state.auth);

  // state to manage form data
  const [userData, setUserData] = useState({
    token: '',
    newPassword: '',
    confirmPassword: ''
  });

  // handle change in form data
  const handleChange = (e) => {
    setUserData((prevState) => ({...prevState, [e.target.name]: e.target.value }));
  }


  // get token from URI
  useEffect(() => {
    if(token !== null){
      setUserData((prevState) => ({ ...prevState, token: token }));
    }
  }, [token]);


  // handle page/reset password status
  useEffect(() => {
    if(auth.message){
      setMessage(auth.message);

      if(!auth.success){
        toast.error(auth.message, {
          autoClose: 2000
        });
      }else{
        toast.success(auth.message, {
          autoClose: 2000
        });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.message]);


  // handle reset user password
  const handleResetUserPassword = () => {
    const newPassword = userData.newPassword;
    const confirmPassword = userData.confirmPassword;

    if((newPassword === null || newPassword === '') && (confirmPassword === null || confirmPassword === '')){
      toast.warn('Please fill both New Password and Confirm Password field', {
        autoClose: 2000
      });
      return 
    }

    if(newPassword !== confirmPassword){
      toast.warn('Password and Confirm Password does not match', {
        autoClose: 2000
      });
      return;
    }

    dispatch(resetUserPassword(userData));
    setUserData((prevState) => ({ ...prevState, newPassword: '', confirmPassword: ''}));
  }


  // handle navigate to home page
  const navigateToHome = () => {
    dispatch(clearAuthStore());
    setUserData((prevState) => ({ ...prevState, newPassword: '', confirmPassword: ''}));
    navigate('/');
  }


  // handle page reset
  const handlePageReset = () => {
    dispatch(clearAuthStore());
    setUserData((prevState) => ({ ...prevState, newPassword: '', confirmPassword: ''}));
    navigate("/forgot-password");
  }


  return (
    <Wrapper>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='page-content w-full p-6 rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8'>
          <h2 className='mb-1 text-xl font-bold text-center leading-tight tracking-tight md:text-2xl'>
            Reset Password
          </h2>

          {false ? (
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

            // form to reset password
            <>
              <div className='mt-4 space-y-4 lg:mt-5 md:space-y-5'>
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium'
                  >
                    New Password
                  </label>
                  <input
                    type='password'
                    name='newPassword'
                    id='password'
                    className='input input-md h-11 sm:text-sm rounded-lg w-full p-2.5 dark:placeholder-gray-400'
                    placeholder='New Password'
                    required=''
                    value={userData.newPassword}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor='confirmPassword'
                    className='block mb-2 text-sm font-medium'
                  >
                    Confirm Password
                  </label>
                  <input
                    type='password'
                    name='confirmPassword'
                    id='confirmPassword'
                    className='input input-md h-11 sm:text-sm rounded-lg w-full p-2.5 dark:placeholder-gray-400'
                    placeholder='Confirm Password'
                    required=''
                    value={userData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <button 
                  className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  onClick={handleResetUserPassword}
                >
                  Reset Password
                </button>
              </div>
            </>)}
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

export default ResetPassword;