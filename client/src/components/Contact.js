import React from 'react';
import styled from 'styled-components';
import Wave from 'react-wavify';

function Contact() {
  return (
    <StyledContact id='contact'>
      <div className='custom-container'>
        <div className='wrapper w-full flex lg:flex-row flex-col lg:space-x-[30px] justify-center items-center'>
          <div className='feedback-content lg:w-1/2 w-full'>
            {/* section-header */}
            <div className='title' data-aos='fade-right'>
              <h1>Feel free to drop me your feedback</h1>
            </div>
          </div>

          {/* feedback section */}
          <div className='feedback-content' data-aos='fade-left'>
            <div className='shape-container absolute'>
              <img src='/images/circle-dot.png' alt='circle-dot-shape' loading='lazy' />
            </div>

            {/* feedback form */}
            <div className='feedback-form flex-1 bg-white sm:p-10 py-5 px-5'>
              <div className='title'>
                <h2>Please send your feedback</h2>
              </div>
              <div className='mt-5'>
                <input className='input' type='text' />
              </div>
              <div className='mt-5'>
                <input className='input' type='text' />
              </div>
              <div className='suggestion mt-5 w-full'>
                <textarea className='w-full p-5' name='message' rows='5' placeholder='Sugestion...' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* animated shapes */}
      <div className='shapes'>
        <div className="svg-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fillOpacity="1"
              d="M0,0L48,32C96,64,192,128,288,133.3C384,139,480,85,576,64C672,43,768,53,864,69.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>

        {/* Wave patterns */}
        <Wave
          className='svg-2'
          paused={false}
          opacity={0.03}
          options={{
            height: 20,
            amplitude: 50,
            speed: 0.2,
            points: 3
          }}
        />

        <Wave
          className='svg-3'
          paused={false}
          opacity={0.02}
          options={{
            height: 20,
            amplitude: 50,
            speed: 0.3,
            points: 3
          }}
        />

        <Wave
          className='svg-4'
          paused={false}
          opacity={0.01}
          options={{
            height: 20,
            amplitude: 50,
            speed: 0.4,
            points: 3
          }}
        />
      </div>
    </StyledContact>
  )
}

const StyledContact = styled.section`
  position: relative;
  max-width: 100vw;
  height: 100%;
  background-color: #0c1631;
  overflow: hidden;
  padding: 9rem 0;

  .custom-container{
    position: relative;
    height: 100%;
    padding: 6rem 5rem;
    z-index: 5;
    .wrapper{
      .feedback-content{
        height: 100%;
        position: relative;
        margin-right: 20px;
        padding-right: 20px;

        .title{
          text-align: center;
          h1{
            font-size: 3rem;
            font-weight: 700;
            line-height: 1.3;
            color: ${({theme}) => theme.colors.white}
          }
        }

        .feedback-form{
          border-radius: 10px;
          input, textarea{
            width: 100%;
            padding: 0.5rem 0.75rem;
            background-color: #f6f6f9;
            color: ${({ theme }) => theme.colors.black};
          }

          .title{
            text-align: center;
            h2{
              font-size: 2.5rem;
              font-weight: 700;
              line-height: 1.3;
              color: ${({theme}) => theme.colors.black};
            }
          }
        }

        .shape-container{
          top: -50px;
          right: -60px;
          img{
            width: 100%;
          }
        }
      }
    }
  }

  .shapes{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    .svg-1{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0%;
      left: 0%;
      svg{
        fill: ${({ theme }) => theme.colors.bg2.secondary};
      }
    }

    .svg-2,
    .svg-3,
    .svg-4{
      width: 100%;
      height: 100%;
      position: absolute;
    }

    .svg-2{
      top: 80%;
      left: 0%;
    }

    .svg-3{
      top: 75%;
      left: 0%;
    }

    .svg-4{
      top: 70%;
      left: 0%;
    }
  }

  // media queries
  @media only screen and (max-width: 992px) {
    h1{
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .custom-container .wrapper{
      .feedback-content{
        margin: 0;
        padding: 0;
      }
    }

    .feedback-content{
      margin-bottom: 2.5rem;
    }
  }
`;

export default Contact;