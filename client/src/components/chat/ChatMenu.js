import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Profile from './Profile';
import Favourite from './Favourite';

function ChatMenu() {
  const { tabIndex } = useSelector((state) => state.tab); //get current side panel tab index
  const user = useSelector((state) => state.user.userDetails); // get user details from store

  return (
    <StyledChatMenu className='chat-menu-section'>
      <div className='tab-content'>
        <div className={tabIndex === 1 ? 'tab-panel active' : 'tab-panel'}>
          {/* Profile component */}
          <Profile 
            name={user.name}
            email={user.email}
            about={user.about}
            contact={user.contact}
            pic={user.profile}
          />
        </div>

        <div className={tabIndex === 2 ? 'tab-panel active' : 'tab-panel'}>
          {/* Favourites component */}
          <Favourite />
        </div>

        <div className={(tabIndex === 3 || tabIndex === 0) ? 'tab-panel active' : 'tab-panel'}>
          {/* Default component */}
        </div>

        <div className={tabIndex === 4 ? 'tab-panel active' : 'tab-panel'}>
          {/* Contacts component */}
        </div>

        <div className={tabIndex === 5 ? 'tab-panel active' : 'tab-panel'}>
          {/* Settings component */}
        </div>
      </div>
    </StyledChatMenu>
  )
}

// styled component
const StyledChatMenu = styled.section`
  position: relative;
  max-width: 20rem;
  height: 100vh;
  min-width: 20rem;
  z-index: 9;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  border-right: 1px solid rgba(${({ theme }) => theme.colors.border}, 0.3);
  animation: fadeInLeft 1s;

  .tab-panel{
    display: none;
  }

  .tab-panel.active{
    display: block;
  }

  .chat-menu{
    padding: 1rem 1rem;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    border-bottom: 1px solid rgba(${({ theme }) => theme.colors.border});

    input{
      color: ${({ theme }) => theme.colors.heading};
      background-color: ${({ theme }) => theme.colors.bg.primary};
      border-bottom: 1px solid ${({ theme }) => theme.colors.heading};
      &:hover{
        background-color: ${({ theme }) => theme.colors.bg.primary};
      }
    }

    .icon{
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.heading};
      &:hover{
        color: ${({ theme }) => theme.colors.primaryRgb};
      }
    }

    .search-icon{
      background-color: ${({ theme }) => theme.colors.bg.primary};
      &:hover{
        background-color: ${({ theme }) => theme.colors.bg.primary};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile }){
    padding: 1.5rem 0;
    margin-top: 60px;
    position: relative;
    max-width: 100vw;
    min-width: 100vw;

    .chat-menu{
      padding: 2rem 1.5rem;

      .icon{
        font-size: 2rem;
      }
    }

    input{
      font-size: 1.5rem;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.bg.primary};
      &:hover{
        background-color: ${({ theme }) => theme.colors.bg.primary};
      }
    }

    h1{
      font-size: 2rem;
    }

    p{
      font-size: 1.5rem;
    }
  }
`;

export default ChatMenu;