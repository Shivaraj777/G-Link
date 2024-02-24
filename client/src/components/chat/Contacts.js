import React from 'react';
import styled from 'styled-components';
import { Button } from '../../styles/Button';
import Spinner from '../../styles/Spinner';
import { AiOutlinePlus } from 'react-icons/ai';

function Contacts(props) {
  const { search, searchResult, showResult, usersLoading, handleChange, searchUser, handleCreateNewChat } = props;

  return (
    <StyledContacts className='contacts-tab dynamic-sidebar'>
      {/* Header */}
      <div className='relative chat-menu flex flex-wrap items-center justify-between w-full'>
        <div>
          <h2>Contacts</h2>
          <p>Start Talking now</p>
        </div>
        <div className='icon text-right'>
          <Button className='btn p-3 text-white rounded'>
            {/* Invite component */}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className='details p-4'>
        <div className='mt-3 flex justify-center items-center'>
          <div className='flex justify-around items-center w-3/4 xs:w-1/2'>
            <input
              type='text'
              className='w-96 px-4 mr-3 py-2 focus:outline-none'
              placeholder='Enter Email or Name'
              value={search}
              onChange={handleChange}
            />
            <Button 
              className='btn p-3 text-white rounded'
              onClick={searchUser}
            >
              Get
            </Button>
          </div>
        </div>

        {/* render serached user */}
        <div className='contact-list my-4 overflow-y-scroll'>
          {usersLoading && showResult ? (
            <>
              <Spinner />
            </>) : (
              <>
                {showResult && searchResult.length === 0 ? (
                  <>
                    <div className={search === '' && searchResult.length === 0 ? 'hidden' : 'text-center w-full'}>
                      <span className='text-gray-500 mr-10'>
                        User Not Found
                      </span>
                    </div>
                  </>) : (
                    <>
                      {searchResult.map((user) => (
                        <li key={user._id} className='px-2 lg:px-2 py-2'>
                          <div className='search-user-box flex items-cente'>
                            <div className='profile absolute left-0 '>
                              <img 
                                className='w-12 h-12 rounded-full'
                                src={user.profile}
                                alt='dp-img'
                              />
                            </div>

                            <div className='details w-3/4'>
                              <h2 className='md:w-32 w-full m-0 text-base'>
                                {user.name}
                              </h2>
                            </div>

                            <div 
                              className='user-add flex justify-center items-center cursor-pointer rounded-full p-2'
                              onClick={() => handleCreateNewChat(user)}
                            >
                              <AiOutlinePlus title='Add' />
                            </div>
                          </div>
                        </li>
                      ))}
                    </>
                  )
                }
              </>
            )
          }
        </div>
      </div>
    </StyledContacts>
  )
}

// styled component
const StyledContacts = styled.div`
  animation: fadeInLeft 1s;

  input{
    color: ${({ theme }) => theme.colors.heading};
    background-color: ${({ theme }) => theme.colors.bg.primary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.heading};
    &:focus{
      background-color: none;
    }
  }

  .contact-list{
    height: calc(100vh - 220px);
  }

  .btn{
    background-color: ${({ theme }) => theme.colors.primaryRgb};
  }

  .search-user-box{
    position: relative;

    .profile{
      width: 50px;
      height: 50px;
    }

    .details{
      padding: 12px 12px 12px 60px;
    }

    .user-add{
      position: absolute;
      right: 0;
      text-align: right;
      padding: 12px 0px 12px 0px;
      width: 40px;
      height: 40px;
      &:hover {
        background-color: ${({ theme }) => theme.colors.bg.secondary};
      }
    }
  }

  @media (max-width: 800px){
    .contact-list{
      height: calc(100vh - 300px);
    }
  }
`;

export default Contacts;