import React from 'react';
import styled from 'styled-components';
import Wave from 'react-wavify';

function Contact() {
  return (
    <StyledContact id='contact'>
      <div className='custom-container'>
        <div className='warpper w-full flex lg:flex-grow flex-col lg:space-x-[30px] justify-center items-center'>
          <div className='feedback-content lg:w-1/2 w-full'>
            {/* section-header */}
            <div className='title'>
              <h1>Feel free to drop me your feedback</h1>
            </div>
          </div>

          {/* feedback section */}
          <div className='feedback-content'>
            {/* <div className='shape-container absolute'>
              <img src='/images/circle-dot.png' alt='circle-dot-shape' loading='lazy' />
            </div> */}

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
`;

export default Contact;