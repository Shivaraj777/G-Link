import React from 'react';
import { Button } from '../styles/Button';
import styled from 'styled-components';
import { HiChevronDoubleRight } from 'react-icons/hi'

function HeroSection() {
  return (
    <StyledHeroSection className='hero-section' id='home'>
      <div className='custom-container flex h-full items-center'>
        <div className='flex'>

          {/* Welcome message */}
          <div className='hero-section-data flex flex-col justify-start' data-aos='fade-right'>
            <p>Welcome to</p>
            <h1 className='font-bold'>Real time chat application for all your needs</h1>
            <p>
              Easy to use our chat app, Attractive and clean design, with many
              Features Dark & light, Recent Chat And many more.......
            </p>
            
            {/* gettig started button */}
            <div className='start-btn'>
              <Button className='button hover:scale-105 text-white radius-round px-8 py-2'>
                Get Started
                <HiChevronDoubleRight className='ml-2' />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* animated shapes */}
      <div className='shapes'>
        <div className='shape-1'>
          <img width='250px' alt='circle-fill-shape' src='/images/circle-fill.png' />
        </div>

        <div className='shape-2'>
          <div style={{width: '800px'}}>
            <img width='800px' alt='circle-fill-shape' src='/images/circle-fill.png' />
          </div>
        </div>

        <div className='shape-3'>
          <div style={{width: '150px'}}>
            <img width='800px' alt='rectangle-shape' src='/images/rect.png' />
          </div>
        </div>

        <div className='shape-4'>
          <img width='43px' alt='circle-hollow-shape' src='/images/circle-hollow.png' />
        </div>

        <div className='shape-5'>
          <img width='43px' style={{zIndex: "2"}} alt='diamond-shape' src='/images/diamond.png' />
        </div>
      </div>
    </StyledHeroSection>
  )
}

// Styled component
const StyledHeroSection = styled.section`
  position: relative;
  padding-top: 140px;
  background: url("/images/hero-section-img.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  text-align: left;
  overflow: hidden;

  .custom-container{
    position: relative;
    z-index: 1;
  }

  .hero-section-data{
    margin: 0 2rem;
    .higlight{
      color: #1c77ed;
    }

    h1 {
      font-size: calc(1.1rem + 28 * (100vw - 320px) / 1600);
      font-weight: 800;
      margin-bottom: 17px;
      line-height: 1.2;
      max-width: 680px;
    }
    p {
      font-size: calc(1.2 * (1rem + 3 * (100vw - 320px) / 1600));
      margin: 0 0;
      max-width: 750px;
      font-weight: 600;
      font-family: Roboto, sans-serif;
      line-height: 1.8;
      color: rgba(0, 0, 0, 0.5);
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      border-radius: 5px;
      background: ${({ theme }) => theme.colors.gradient};
      font-size: 1rem;
      font-weight: 600;
      padding: 18px 30px;
      transition: 0.3s;
      box-shadow: 0 0 10px ${({ theme }) => theme.colors.boxShadow.primary};
      &:hover {
        scale: 1.01;
      }
    }
  }

  // shapes styles
  .shapes {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    animation: zoom-fade 5s infinite linear;
    div {
      position: absolute;
    }
    .shape-1 {
      top: -10%;
      left: -3%;
      opacity: 0.1;
    }
    .shape-2 {
      top: 40%;
      right: 30%;
      opacity: 0.1;
    }
    .shape-3 {
      top: 70%;
      left: -3%;
      transform-origin: center;
      transform: rotate(20deg);
      opacity: 0.1;
    }
    .shape-4 {
      bottom: 0%;
      left: 20%;
      transition: all 0.5s;
      animation: balloonfly-02 12s infinite;
    }
    .shape-5 {
      bottom: 0%;
      right: 20%;
      transition: all 0.5s;
      animation: balloonfly-01 12s infinite;
    }
  }

  // animations for shapes
  @keyframes zoom-fade{
    0% {
      transform: scale(1.02);
    }

    50% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.02);
    }
  }

  @keyframes balloonfly-01 {
    0% {
      top: 40%;
      opacity: 0;
    }
    30% {
      transform: scale(1.5);
      opacity: 1;
    }
    100% {
      top: 15%;
      opacity: 0;
    }
  }

  @keyframes balloonfly-02 {
    0% {
      top: 40%;
      opacity: 0;
    }
    30% {
      transform: scale(1.5);
      opacity: 1;
    }
    100% {
      top: 10%;
      opacity: 0;
    }
  }

  // media queries
  @media(min-width: ${({ theme }) => theme.media.mobile}){
    .start-btn{
      margin: 2.5rem 0;
    }
    .custom-container{
      padding: 0 5rem;
    }
    .button{
      font-size: 1rem;
    }
  }

  @media(max-width: ${({ theme }) => theme.media.mobile}){
    background-image: url("/images/hero-section-mobile.png");
    padding: 0rem 0rem;
    
    .custom-container{
      padding: 0;
    }

    .start-btn{
      margin: 2.5rem auto;
    }

    .hero-section-data{
      margin-top: 85px;
      h1{
        font-size: 1.5rem;
      }
      p{
        font-size: 1.2rem;
        line-height: 1.4;
      }
      h1,
      p{
        text-align: center;
      }
    }

    .button{
      font-size: 1.2rem;
    }

    .container{
      padding: 1rem;
    }
  }
`;

export default HeroSection;