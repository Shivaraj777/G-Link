import React from 'react';
import styled from 'styled-components';
import SidePanel from './SidePanel';
import ChatMenu from './ChatMenu';
import ChatWindow from './ChatWindow';

function Chat() {
  return (
    <StyledChat className='flex justify-start w-screen'>
      <SidePanel />
      <ChatMenu />
      <ChatWindow />
    </StyledChat>
  )
}

// styled component
const StyledChat = styled.section`
  overflow: hidden;
  height: 100vh;
  transition: all 0.5s;
`;

export default Chat;