import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { CgChevronDoubleUp } from 'react-icons/cg';

function ScrollToTopWizard() {
  const [visibility, setVisibility] = useState(false); // state to manage widget visibility

  // scroll to top of the screen on widget click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // update the visibility of widget
  const listenToScroll = () => {
    const heightToHide = 250;    // height at which widget should be hidden
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop; // get current height

    if(winScroll > heightToHide){
      setVisibility(true);
    }else{
      setVisibility(false);
    }
  }

  // add event listener on page load
  useEffect(() => {
    document.addEventListener('scroll', listenToScroll);
  }, []);

  return (
    <>
      {visibility && (
        <Wrapper>
          <div className='top-btn' onClick={scrollToTop}>
            <CgChevronDoubleUp className='up-icon' />
          </div>
        </Wrapper>
      )}
    </>
  )
}

// styled component
const Wrapper = styled.section`
  .top-btn{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
    padding: 0.25rem;
    z-index: 999;
    border-radius: 50%;
    box-shadow: 0px 0px 24px ${({theme}) => theme.colors.boxShadow.primary};
    background-color: #3180fc; 
    color: white;
    width: 4rem;
    height: 4rem;
    font-size: 2.4rem;

    .up-icon{
      transition: transform 0.5s;
      &:hover{
        transform: translateY(-2px);
      }
    }
  }
`;

export default ScrollToTopWizard;