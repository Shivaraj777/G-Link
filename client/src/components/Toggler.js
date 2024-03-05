import React from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_DARKTHEME } from '../redux/theme/theme.action';

function Toggler() {
  const { darkThemeEnabled } = useSelector((state) => state.theme); // get state data
  const dispatch = useDispatch(); // get dispatch function from store

  // handle toggle theme
  const toggleTheme = () => {
    dispatch({ type: TOGGLE_DARKTHEME});
  }

  return (
    <StyledToggler onClick={toggleTheme}>
      {darkThemeEnabled ? <RiSunLine className='icon' /> : <RiMoonLine className='icon' />}
    </StyledToggler>
  )
}

// styled component
const StyledToggler = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;

  @media screen and (min-width: 981px){
    .icon{
        font-size: 2.3rem;
    }
  }

  @media(max-width: 980px){
    color: ${({theme}) => theme.colors.heading};
  }
`;

export default Toggler;