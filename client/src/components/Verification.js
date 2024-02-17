/* If user account is not verified after login, they are redirect to verification page */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GoMail } from 'react-icons/go';
import ResendVerificationEmailModal from './modal/ResendVerificationEmailModal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../redux/auth/auth.action';

function Verification() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false); //state to manage verification status
  const [isOpen, setIsOpen] = useState(false); // state to manage modal

  // state to manage message based on verification status
  const [message, setMessage] = useState('Your Email is not Verified. We have sent a verification Mail to your Account. Please Check you Spam or Junk Folder');

  // get user details and auth status from store
  const user = useSelector((state) => state.user.userDetails);
  const auth = useSelector((state) => state.auth); 


  // if verification status is true, navigate to chat screen
  useEffect(() => {
    if(status){
      navigate('/');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);


  // check verification status from user object(global state)
  useEffect(() => {
    // navigate to landing page if user is null
    if(!user){
      navigate('/');
    }

    // set verification status from user object
    if(user){
      setStatus(user.is_verified);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);


  /* 
    check for verification status from auth object(global state)
    scenario: resend verification email(auth state is updated)
  */
  useEffect(() => {
    if(auth.message){
      setMessage(auth.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);


  // handle opening modal
  const openModal = () => {
    setIsOpen(true);
  }


  return (
    <Wrapper>
      <div className='m-4 p-4 h-full flex flex-col items-center justify-center'>
        {false ? (
          <>
            <div className='flex flex-col items-center justify-center w-2/4'>
              <GoMail className='mail-icon' color='#8af859' />
              <p className='my-2'>Your Email is Verified Now.</p>
            </div>
            {/* <h1></h1> */}
          </>) : (
            <>
              <div className='flex flex-col items-center justify-center w-3/4'>
                <GoMail className='mail-icon' color='#faab07' />
                <h1>Verify Your Email</h1>
                <p className='my-2 px-2 mx-auto'>{message}</p>
                <p className='my-2 font-bold px-2 mx-auto'>OR</p>
                <div className='flex'>
                  <button
                    className='text-2xl cursor-pointer mx-auto'
                    onClick={() => dispatch(signOut())}
                  >
                    Home
                  </button>
                  <button
                    className='text-2xl cursor-pointer mx-auto'
                    onClick={openModal}
                  >
                    Resend
                  </button>
                </div>
              </div>
              <ResendVerificationEmailModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </>
          )
        }
      </div>
    </Wrapper>
  )
}

// styled component
const Wrapper = styled.section`
  color: ${({ theme }) => theme.colors.heading};
  background-color: ${({ theme }) => theme.colors.bg.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 100vw;

  .mail-icon{
    font-size: 20rem;
  }

  button{
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.heading};
    margin: 0.5rem;
    padding: 0.6rem 2rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.cyan};
    transition: all 0.4s ease-in-out;
    &:hover{
      transform: translateY(-5px);
    }
  }

  h1{
    text-align: center;
    font-size: 2.4rem;
    font-weight: bold;
    margin: 15px auto;
    line-height: 1.2;
    max-width: 680px;
  }

  p{
    text-align: center;
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 850px;
    line-height: 27px;
    color: ${({ theme }) => theme.colors.heading};
  }
`;

export default Verification;