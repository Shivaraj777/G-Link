import React from 'react';
import { useSelector } from 'react-redux';
import { PuffLoader } from 'react-spinners';
import styled from 'styled-components';

function Loading(props) {
  const { loading } = props;
  const { darkThemeEnabled } = useSelector((state) => state.theme);

  return (
    <Wrapper className='h-screen flex justify-center items-center text-center'>
      {/* <h1>Loading....</h1> */}
      <PuffLoader
        loading={loading}
        color={darkThemeEnabled ? '#EAEDEF' : '#357BE4' }
        size={250}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg2.secondary};
`;

export default Loading;