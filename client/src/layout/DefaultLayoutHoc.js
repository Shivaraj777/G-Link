import React from 'react';

// default wrapper component
function DefaultLayoutHoc() {
  return ({...props}) => {
    return (
      <div className='relative w-full overflow-x-hidden'>
        <Components {...props} />
      </div>
    )
  }
}

export default DefaultLayoutHoc;