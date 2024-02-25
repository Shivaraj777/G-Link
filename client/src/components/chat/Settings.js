import { Disclosure } from '@headlessui/react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { BsCircleHalf } from 'react-icons/bs';
import { BiChevronUp } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { chatTheme } from '../../data/chatThemeData';
import UpdateProfileImage from '../modal/UpdateProfileImage';
import EditProfile from '../modal/EditProfile';

function Settings() {
  const themeColor = useSelector((state) => state.chatTheme.themeColor);
  const [color, setColor] = useState(themeColor);

  const user = useSelector((state) => state.user.userDetails);

  return (
    <Wrapper className='setting-tab dynamic-sidebar'>
      <div className='relative flex items-center chat-menu flex-wrap justify-between w-ful'>
        <div>
          <h2>Settings</h2>
          <p>Personal Information</p>
        </div>
        <div className='icon text-right'></div>
      </div>

      <div className='details p-4'>
        <div className='setting-block'>
          <div className='user-profile flex items-center flex-col py-3'>
            {/* Upload profile image component */}
            <UpdateProfileImage />
            <div className='user-name py-4 text-center w-full'>
              <h5 className='text-xl font-medium'>{user.name}</h5>
            </div>
          </div>
        </div>

        <div className='setting-block'>
          <div className='profile-setting w-full pt-4'>
            {/* Edit Profile component */}
            <EditProfile />
          </div>
        </div>

        <div className='setting-block'>
          <div className='theme-setting w-full pt-3'>
            <div className='mx-auto w-full max-w-md rounded-2xl py-2'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full justify-between items-center rounded-lg py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                      <div className='flex justify-between items-center'>
                        <BsCircleHalf className='mb-4 mr-4' />
                        <span>Themes</span>
                      </div>

                      <BiChevronUp 
                        className={`${open ? 'rotate-180 transform mb-4' : ''} h-5 w-5 mb-4`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className='isclosure-Panel pt-2 pb-2 text-sm'>
                      <div className='h-full flex justify-start items-center w-full'>
                        {chatTheme.map((theme) => (
                          <button 
                            key={theme.id} 
                            className={color === theme.color ? 'btn-style rounded-full active flex justify-center items-center' : 'btn-style rounded-full flex justify-center items-center'}
                          >
                            {color === theme.color ? <FaCheck className='checkStyl' /> : null}
                          </button>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

// styled component
const Wrapper = styled.div`
  animation: fadeInLeft 1s;

  .user-profile-img{
    width: 150px;
    height: 150px;

    img{
      min-width: 100%;
    }
  }

  .dialog-box{
    .dialog-box-wrapper .dialog-panel{
      background-color: ${({ theme }) => theme.colors.bg.secondary};
    } 
  }

  .setting-block{
    border-bottom: 1px solid rgba(${({ theme }) => theme.colors.border});
  }

  .user-profile{
    position: relative;
    background-color: ${({ theme }) => theme.colors.bg.primary};

   
    .profile-photo-edit{
      position: absolute;
      right: 0;
      left: auto;
      bottom: 0;
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.bg.primary};

      .icon{
        color: ${({ theme }) => theme.colors.text.secondary};
        border-radius: 50%;
      }
    }
  }


  @media (max-width: ${({ theme }) => theme.media.mobile}){
    .details{
      margin: 10px 50px 0px 50px;
    }

    .intro{
      padding: 3rem;
    }
  }
`;

export default Settings;