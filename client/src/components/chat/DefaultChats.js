import React, { useState } from 'react';
import styled from 'styled-components';
import Searchbar from './Searchbar';

function DefaultChats() {
  const [openSearchbar, setOpenSearchbar] = useState(false); //state to enable/disable search bar in chat window
  const [searchQuery, setSearchQuery] = useState(''); //state to manage search text

  return (
    <Wrapper className='default dynamic-sidebar'>
      <div className='chat-menu flex flex-wrap items-center justify-between w-full'>
        {openSearchbar ? (
          <></>) : (
            <>
              <div>
                <h1 className='text-2xl m-0'>Chat</h1>
                <p className='text-gray-400 mb-0'>Start New Conversation</p>
              </div>
            </>
          )
        }

        <div className={openSearchbar ? 'flex justify-center items-center w-full' : 'flex justify-center items-center'}>
          <Searchbar 
            openSearchbar={openSearchbar}
            setOpenSearchbar={setOpenSearchbar}
            setSearchQuery= {setSearchQuery}
          />
          {/* Group Modal */}
        </div>
      </div>

      {/* UsersList */}
    </Wrapper>
  )
}

// styled component
const Wrapper = styled.div`
  animation: fadeInLeft 1s;
  .group-icon {
    &:hover {
      background-color: ${({ theme }) => theme.colors.bg.secondary};
      color: ${({ theme }) => theme.colors.primaryRgb};
    }
  }
`;

export default DefaultChats;