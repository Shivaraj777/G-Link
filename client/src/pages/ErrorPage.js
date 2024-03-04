import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

function ErrorPage() {
  return (
    <Wrapper className='flex justify-center flex-col items-center text-center'>
      <div>
        <h1 className='text-center text-4xl mb-20 align-middle'>404</h1>
        <p>Page Not Found</p>

        <NavLink to='/'>
          <Button className='button bg-green-600 hover:bg-green-500 active:bg-green-700 text-white radius-round h-11 px-8 py-2'>
            Go Back
          </Button>
        </NavLink>
      </div>
    </Wrapper>
  )
}

// styled component
const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg.secondary};

  h1{
    font-size: 10rem;
  }

  p{
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text.secondary};;
  }

  .button{
    width: auto;
    height: auto;
    font-size: 1.5rem;
  }
`;

export default ErrorPage;