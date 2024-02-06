import React, { useState } from 'react';
import styled from 'styled-components';
import { GoMail } from 'react-icons/go';
import ResendVerificationEmailModal from './modal/ResendVerificationEmailModal';

function VerifyEmail() {
  const [isOpen, setIsOpen] = useState(false); // state to manage open/close of modal

  // handle opening modal
  const openModal = () => {
    setIsOpen(true);
  }

  return (
    <Wrapper className='flex flex-col justify-center items-center'>
      { false ? (
        <>
          <div className='flex flex-col justify-center items-center w-3/4'>
            <GoMail className='w-2/4 h-2/4 red' color='#8af859' />

            <p className='text-2xl text-gray-900 dark:text-white my-2 px-2 mx-auto align-middle'>
              Your email is verified
            </p>

            <div className='w-2/4 flex justify-center item-center'>
              <button className='cursor-pointer bg-blue-500 my-2 px-3 rounded-lg py-3 mx-auto align-middle'>
                <span className='text-2xl text-white'>Start Chatting</span>
              </button>
            </div>
          </div>
        </>) : (
          <>
            <div className='flex flex-col justify-center items-center w-3/4'>
              <GoMail className='w-2/4 h-2/4 red' color='#faab07' />

              <p className='text-2xl text-gray-900 dark:text-white my-2 px-2 mx-auto align-middle'>
                Message
              </p>

              <button className='cursor-pointer bg-blue-500 my-2 px-3 rounded-lg py-3 mx-auto align-middle'>
                <span 
                  className='text-2xl text-white'
                  onClick={openModal}
                >
                  Resend Verification Link
                </span>
              </button>
            </div>

            <ResendVerificationEmailModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </>) }
    </Wrapper>
  )
}

// styled component
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({theme}) => theme.colors.bg.primary};

  h1,
  p{
    color: ${({theme}) => theme.colors.heading};
  }
`;

export default VerifyEmail;