import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

function AppHeader() {
  return (
    <Header className='w-full flex items-center'>
      <div className='header flex justify-between items-center w-full'>
        <div className='hero-section-logo flex justify-start items-center'>
          <img src='./images/chat.png' alt='G-Link-logo' loading='lazy' className='logo' />
        </div>
        <Navbar />
      </div>
    </Header>
  )
}

// create styled component
const Header = styled.header`
  position: fixed;
  z-index: 99;
  transition: 0.5s;

  .header{
    padding: 0 1.5rem;
    height: 100px;
  }

  .header.active{
    background-color: ${({theme}) => theme.colors.bg2.primary};
    box-shadoe: 0 0 20px ${({theme}) => theme.colors.boxShadow.primary};
  }

  .hero-section-logo{
    width: 100%;
  }
  .logo{
    height: 4rem;
  }

  @media(max-width: 1138px){
    .header{
      background-color: ${({theme}) => theme.colors.bg2.primary};
    }
  }
`;

export default AppHeader;