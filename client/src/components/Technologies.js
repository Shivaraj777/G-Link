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
    </StyledTechnologies>
  )
}

// styled component
const StyledTechnologies = styled.section`
  
`;

export default Technologies;