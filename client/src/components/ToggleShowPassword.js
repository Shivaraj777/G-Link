import React, { useState } from 'react';
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function ToggleShowPassword() {
  const [isVisible, setIsVisible] = useState(false); // state to manage password visibility
  const InputType = isVisible ? 'text' : 'password'; // set password field input type

  // Show/Hide password icon JSX
  const EyeIcon = (
    <div className='input-suffix-end flex justify-center items-center h-full'>
      <span className='cursor-pointer text-xl mb-0'>
        {isVisible ? (
          <AiFillEye 
            className='eye-icon-fill'
            onClick={() => setIsVisible(false)}
          />
        ) : (
          <AiOutlineEyeInvisible 
            className='eye-icon-line' 
            onClick={() => setIsVisible(true)}
          />
        )}
      </span>
    </div>
  )

  return [EyeIcon, InputType];
}

export default ToggleShowPassword;