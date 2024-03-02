import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ImExit, ImBlocked } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { MdFavorite } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function DropDown(props) {
  const [activeChat, setActiveChat] = useState(null);

  const selectedChat = useSelector((state) => state.chat.selectedChat);

  useEffect(() => {
    setActiveChat(selectedChat);
  }, [selectedChat]);


  // handle marking chat as favourite
  const markAsFavourite = () => {
    toast.success('We are working this feature. Available Soon', {
      autoClose: 2000
    });
  }


  // handle deleting a chat
  const deleteChat = () => {
    toast.success('We are working this feature. Available Soon', {
      autoClose: 2000
    });
  }


  // handle leaving group chat
  const leaveGroup = () => {
    toast.success('We are working this feature. Available Soon', {
      autoClose: 2000
    });
  }


  return (
    <>
      <Menu>
        <Menu.Button className='btn three-dot-btn'>
          <BiDotsVerticalRounded />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='dropdown-menu absolute py-4'>
            <Menu.Item>
              {({ active }) => (
                <button 
                  className={`${active ? 'active flex items-center justify-between' : 'flex items-center justify-between'}`}
                  onClick={props.openModal}
                >
                  <div className='icon-btn btn-outline-primary mr-4'>
                    <CgProfile className='icon inline' />
                  </div>{" "}
                  <h5 className='relative w-full text-left'>View Contact</h5>
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button 
                  className={`${active ? 'active flex items-center justify-between' : 'flex items-center justify-between'}`}
                  onClick={markAsFavourite}
                >
                  <div className='icon-btn btn-outline-primary mr-4'>
                    <MdFavorite className='icon inline' />
                  </div>{" "}
                  <h5 className='relative w-full text-left'>Mark as Favourites</h5>
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button 
                  className={`${active ? 'active flex items-center justify-between' : 'flex items-center justify-between'}`}
                  onClick={deleteChat}
                >
                  <div className='icon-btn btn-outline-primary mr-4'>
                    <RiDeleteBin6Line className='icon inline' />
                  </div>{" "}
                  <h5 className='relative w-full text-left'>Delete Chat</h5>
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button 
                  className={`${active ? 'active flex items-center justify-between' : 'flex items-center justify-between'}`}
                  onClick={leaveGroup}
                >
                  <div className='icon-btn btn-outline-primary mr-4'>
                    {activeChat.isGroupChat ? (
                        <ImExit className="icon inline" />
                      ) : (
                        <ImBlocked className="icon inline" />
                    )}
                  </div>{" "}
                  <h5 className='relative w-full text-left'>
                    {activeChat.isGroupChat ? "Leave Group " : "Block"}
                  </h5>
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

export default DropDown;