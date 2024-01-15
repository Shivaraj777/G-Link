import React from 'react';
import { styled } from 'styled-components';
import { technologiesData } from '../data/landingData';

function Technologies() {
  return (
    <StyledTechnologies className='technologies-section' id='technology'>
      <div className='custom-container'>

        {/* Section header */}
        <div className='flex items-start justify-center'>
          <div className='section-header text-center'>
            <h5>POWERFUL</h5>
            <h2 className='capitalize'>Technology Used</h2>
          </div>
        </div>

        {/* Technologies list */}
        <div className='technologies-list'>
          <ul>
            {technologiesData.map((technology) => (
              <li key={technology.id}>
                <div className='flex flex-col justify-center items-center p-8'>
                  <img src={technology.icon} alt='technology-img' />
                  <h5 className='mt-5'>{technology.name}</h5>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* animated shapes */}
      <div className='shapes'>
        <div className='shape-1'>
          <img width='250px' src='/images/circle-fill.png' alt='circle-fill-img' />
        </div>

        <div className='shape-2'>
          <div style={{width: '200px'}}>
            <img width='800px' src='/images/circle-fill.png' alt='circle-fill-img' />
          </div>
        </div>

        <div className='shape-3'>
          <div style={{width: '150px'}}>
            <img width='800px' src='/images/rect.png' alt='rectangle-img' />
          </div>
        </div>

        <div className='shape-4'>
          <img width='43px' src='/images/circle-hollow.png' alt='circle-hollow-img' />
        </div>

        <div className='shape-5'>
          <img width='43px' src='/images/diamond.png' alt='diamond-img' style={{zIndex: '2'}} />
        </div>
      </div>
    </StyledTechnologies>
  )
}

// styled component
const StyledTechnologies = styled.section`
  
`;

export default Technologies;