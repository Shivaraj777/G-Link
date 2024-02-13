import React from 'react';
import styled from 'styled-components';
import SidePanel from './SidePanel';

function Chat() {
  return (
    <StyledChat className='flex justify-start w-screen'>
      <SidePanel />
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