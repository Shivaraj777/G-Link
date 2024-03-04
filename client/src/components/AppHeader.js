import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

function AppHeader() {
  const [header, setHeader] = useState(false); // state to manage/update header style

  // chnage header background
  const changeBackground = () => {
    if(window.scrollY >= 80){
      setHeader(true);
    }else{
      setHeader(false);
    }
  }

  // add event listener
  window.addEventListener('scroll', changeBackground);
  
  return (
    <Header className='w-full flex items-center'>
      <div className={header ? 'header active flex justify-between items-center w-full' : 'header flex justify-between items-center w-full'}>
        <div className='hero-section-logo flex justify-center items-center'>
          <img src='./images/G_Link_Icon.png' alt='G-Link-logo' loading='lazy' className='logo' />
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
    box-shadow: 0 0 20px ${({theme}) => theme.colors.boxShadow.primary};

    .navbar-list .navbar-link{
      color: ${({theme}) => theme.colors.heading};
      &:hover,
      &:active{
        border-bottom: 2px solid ${({theme}) => theme.colors.cyan};;
        color: ${({theme}) => theme.colors.cyan};
      }

      .button{
        color: ${({theme}) => theme.colors.heading};
        border: solid 2px  ${({theme}) => theme.colors.heading};
        &:hover{
          color: ${({theme}) => theme.colors.cyan};
          border: solid 2px  ${({theme}) => theme.colors.cyan};
        }
      }
    }

    .navbar-list li{
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7){
        .navbar-link{
          &:hover,
          &:active{
            border-bottom: none;
          }
        }
      }
    }
  }
  
  .logo{
    height: 4rem;
  }

  @media(max-width: 1138px){
    .header{
      background-color: ${({theme}) => theme.colors.bg2.primary};

      .navbar-list .navbar-link{
        color: ${({theme}) => theme.colors.heading};

        .button{
          color: ${({theme}) => theme.colors.heading};
          border-color: ${({theme}) => theme.colors.heading};
        }
      }
    }
  }
`;

export default AppHeader;