import React from 'react';
import styled from 'styled-components';

function ForgotPassword() {
  return (
    <Wrapper>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='page-content w-full p-6 rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8'>
          <h2 className='mb-1 text-xl font-bold text-center leading-tight tracking-tight md:text-2xl'>
            Forgot Password
          </h2>

          {false ? (
            <>
              <p className='text-center'>Message</p>
              <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                Home
              </button>
              <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
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
                  />
                </div>
                <button className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
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