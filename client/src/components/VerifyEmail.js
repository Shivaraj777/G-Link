import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GoMail } from 'react-icons/go';
import ResendVerificationEmailModal from './modal/ResendVerificationEmailModal';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { verifyEmail } from '../redux/auth/auth.action';

function VerifyEmail() {
  const {token} = useParams(); // get the token from url
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false); // state to manage open/close of modal
  const [jwtToken, setJwtToken] = useState(null);
  const [message, setMessage] = useState('We are verifying your Email...'); // state to manage verification message
  const [status, setStatus] = useState(false); // state to manage verification status
  // console.log(message, status, token);

  // get global auth state
  const auth = useSelector((state) => state.auth);

  // verify jwt on page load
  useEffect(() => {
    setJwtToken(token);
    if(jwtToken !== null){
      dispatch(verifyEmail(jwtToken));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jwtToken]);


  // update verification status message
  useEffect(() => {
    setMessage(auth.message);
  }, [auth.message]);


  // update verification status
  useEffect(() => {
    setStatus(auth.success);
  }, [auth.success]);


  // navigate to home page
  const startChatting = () => {
    navigate('/');
  }


  // handle opening modal
  const openModal = () => {
    setIsOpen(true);
  }

  return (
    <Wrapper className='flex flex-col justify-center items-center'>
      { status ? (
        <>
          <div className='flex flex-col justify-center items-center w-3/4'>
            <GoMail className='w-2/4 h-2/4 red' color='#8af859' />

            <p className='text-2xl text-gray-900 dark:text-white my-2 px-2 mx-auto align-middle'>
              Your email is verified
            </p>

            <div className='w-2/4 flex justify-center item-center'>
              <button 
                className='cursor-pointer bg-blue-500 my-2 px-3 rounded-lg py-3 mx-auto align-middle'
                onClick={startChatting}
              >
                <span className='text-2xl text-white'>Start Chatting</span>
              </button>
            </div>
          </div>
        </>) : (
          <>
            <div className='flex flex-col justify-center items-center w-3/4'>
              <GoMail className='w-2/4 h-2/4 red' color='#faab07' />

              <p className='text-2xl text-gray-900 dark:text-white my-2 px-2 mx-auto align-middle'>
                {message}
              </p>

              <button 
                className='cursor-pointer bg-blue-500 my-2 px-3 rounded-lg py-3 mx-auto align-middle'
                onClick={openModal}
              >
                <span className='text-2xl text-white'>
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