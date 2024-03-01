import React, { Fragment, createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getSender, getSenderPic, isMyMessage } from '../../helperFunction/chat.helper';
import Spinner from '../../styles/Spinner';
import moment from 'moment';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Button } from '../../styles/Button';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { BiSmile } from 'react-icons/bi';
import { IoMdSend } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import EmojiPicker from 'emoji-picker-react';
import { sendMessagee } from '../../redux/message/message.action';


function ChatWindow() {
  const dispatch = useDispatch();
  const inputRef = createRef();  // store reference of message input bar
  const [isOpen, setIsOpen] = useState(false);
  const [activeChat, setActiveChat] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0); // state to manage cursor position in message input bar
  const [loading, setLoading] = useState(false);

  // get global state from store
  const loggedUser = useSelector((state) => state.user.userDetails);
  const selectedChat = useSelector((state) => state.chat.selectedChat);
  const allMessages = useSelector((state) => state.message.chatMessages);
  const { darkThemeEnabled } = useSelector((state) => state.theme);
  console.log(allMessages);


  // handle change in typed message
  const handleChange = (e) => {
    setNewMessage(e.target.value);
  } 


  // handle selecting emojis from picker
  const pickEmoji = (emojiData, event) => {
    const ref = inputRef.current;
    ref.focus();
    const start = newMessage.substring(0, ref.selectionStart);
    const end = newMessage.substring(ref.selectionStart);
    let msg = start + emojiData.emoji + end;
    setNewMessage(msg);
    setCursorPosition(start.length + emojiData.emoji.length);
  }


  // handle opening a chat
  useEffect(() => {
    setActiveChat(selectedChat);
  }, [selectedChat]);


  // handle modal open
  const openModal = () => {
    setIsOpen(true);
  }


  // handle modal close
  const closeModal = () => {
    setIsOpen(false);
  }


  const hideUserChat = () => {
    document.getElementById("user-chat").classList.remove("fadeInRight");
    document.getElementById("user-chat").classList.remove("user-chat-show");
    document.getElementById("user-chat").classList.add("fadeInRight2");
  }


  // handle sending message
  const handleSendMessage = async () => {
    if(!newMessage){
      return;
    }

    const messageData = {
      content: newMessage,
      chatId: activeChat._id
    }

    dispatch(sendMessagee(messageData));
    setNewMessage('');
  }


  // update cursor position in message input box
  useEffect(() => {
    if(inputRef.current !== null){
      inputRef.current.selectionEnd = cursorPosition;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursorPosition]);


  // update chat messages from store
  useEffect(() => {
    setChatMessages(allMessages);
  }, [allMessages]);


  return (
    <Wrapper id='user-chat'>
      <div className='chat-window-section'>
        {!activeChat ? (
          <>
            <div className='chat-welcome-section overflow-x-hidden flex justify-center items-center'>
              <div className='flex justify-center items-center p-4"'>
                <div className='flex flex-col justify-center items-center text-center'>
                  <div className='avatar mx-auto mb-4'>
                    <div className='rounded-full'>
                      <img src='/images/G_Link_Icon.png' alt='logo' className='w-10' />
                    </div>
                  </div>
                  <h4>Welcome to G-Link Chat App</h4>
                  <p>Click on User to start chat</p>
                </div>
              </div>
            </div>
          </>) : (
            <>
              <div className='chat-content flex'>
                <div className='w-full h-full position-relative'>
                  <div className='user-chat-topbar p-3 p-lg-4'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center justify-center'>
                        <div 
                          className='arrow-icon ml-5 mr-5 cursor-pointer text-2xl p-2 rounded-full'
                          onClick={hideUserChat}
                        >
                          <MdOutlineArrowBackIos />
                        </div>

                        <div className='flex items-center cursor-pointer' onClick={openModal}>
                          <div className='chat-avatar mr-4'>
                            <img 
                              src={!activeChat.isGroupChat ? getSenderPic(loggedUser, activeChat.users) : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6wQvepXb0gM_Ft1QUOs6UyYJjPOmA-gq5Yw&usqp=CAU'}
                              alt='profile'
                              className='w-12 h-12 rounded-full'
                            />
                          </div>

                          <div className='overflow-hidden'>
                            <h6 className='mb-0'>
                              {activeChat.isGroupChat ? activeChat.chatName : getSender(loggedUser, activeChat.users)}
                            </h6>
                            <p className='mb-0 truncate'>
                              <small className='truncate'>
                                {activeChat.isGroupChat ? (
                                  activeChat.users.map((user, index) => (
                                    <span key={index} className='text-sm'>
                                      {index ? ', ' : ' '} + {user.name}
                                    </span>
                                  ))) : (
                                    <></>
                                  )
                                }
                              </small>
                            </p>
                          </div>
                        </div> 
                      </div>

                      <div className='flex items-center'>
                        <div className='dropdown relative'>
                          {/* Dropdown component */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='chat-conversation p-3 p-lg-4'>
                    <ul className='chat-conversation-list'>
                      {loading ? (
                        <>
                          <div className='loader flex justify-center items-center'>
                            <Spinner />
                          </div>
                        </>) : (
                          <>
                            {chatMessages.map((message, index) => 
                              isMyMessage(loggedUser, message) && message.sender.profile ? (
                                <li key={index} className='chat-list right'>
                                  <div className='conversation-list'>
                                    <div className='chat-avatar mr-4'>
                                      <img 
                                        src={message.sender.profile}
                                        alt=''
                                        className='rounded-full'
                                      />
                                    </div>
                                    <div className='user-chat-content'>
                                      <div className='flex mb-3 justify-end'>
                                        <div className='chat-wrap-content'>
                                          <span className='mb-0 chat-content text-sm font-medium text-left'>
                                            {message.content}
                                          </span>
                                        </div>
                                      </div>
                                      <div className='conversation-name'>
                                        <small className='mb-0'>
                                          {moment(message.createdAt).format('DD/MMM/YYYY , h:mm a').toUpperCase()}
                                        </small>
                                        <span className='ml-2 text-xs user-name'>
                                          you
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>) : (
                                  <li key={index} className='chat-list'>
                                    <div className='conversation-list'>
                                      <div className='chat-avatar mr-4'>
                                        <img
                                          src={message.sender.profile}
                                          alt=''
                                          className='rounded-full'
                                        />
                                      </div>
                                      <div className='user-chat-content'>
                                        <div className='flex mb-3'>
                                          <div className='chat-wrap-content'>
                                            <span className='mb-0  text-sm font-medium text-left'>
                                              {message.content}
                                            </span>
                                          </div>
                                        </div>
                                        <div className='conversation-name'>
                                          <span className='ml-2 text-xs user-name'>
                                            {message.sender.name}
                                          </span>
                                          <small className='ml-2 mb-0'>
                                            {moment(message.createdAt).format('DD/MMM/YYYY , h:mm a').toUpperCase()}
                                          </small>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                )
                            )}
                            <div /*ref={messageEndRef}*/></div>
                          </>
                        )
                      }
                    </ul>
                  </div>

                  <div className='chat-input-section p-5 p-lg-6'>
                    <div className='flex justify-between items-center'>
                      <div className='chat-input flex'>
                        <div className='links-list-item'>
                          <Menu>
                            <Menu.Button className='flex justify-center items-center btn emoji-btn mr-2'>
                              <BiSmile title='emoji' />
                            </Menu.Button>
                            <Transition
                              as={Fragment}
                              enter='transition ease-out duration-100'
                              // enterFrom='transform opacity-0 scale-95'
                              enterTo='transform opacity-100 scale-100'
                              leave='transition ease-in duration-75'
                              leaveFrom='transform opacity-100 scale-100'
                              leaveTo='transform opacity-0 scale-95'
                            >
                              <Menu.Items className='emoji-picker'>
                                {/* Emoji Picker */}
                                <EmojiPicker
                                  emojiStyle='facebook'
                                  theme={darkThemeEnabled ? 'dark' : 'light' }
                                  lazyLoadEmojis={true}
                                  onEmojiClick={pickEmoji}
                                />
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>

                      {/* Input field */}
                      <div className='position-relative w-full'>
                        <input
                          placeholder='Type Your message...'
                          autoComplete='off'
                          id='chat-input'
                          className='w-full py-3 px-5 focus:outline-none'
                          value={newMessage}
                          onChange={handleChange}
                          ref={inputRef}
                        />
                      </div>

                      {/* send button */}
                      <div 
                        className='chat-input-links ml-2'
                        onClick={handleSendMessage}
                      >
                        <div className='links-list-items ml-5'>
                          <Button className='btn submit-btn flex justify-center items-center'>
                            <IoMdSend />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }

        <div className='absolute'>
          <div className='flex items-center justify-center'>
            <Transition appear as={Fragment} show={isOpen}>
              <Dialog 
                as='div' 
                className='user-profile-sidebar absolute z-50'
                onClose={closeModal}
              >
                <div className='dialog-wrapper z-50 fixed inset-0'>
                  <div className='dialog-container flex min-h-full items-start justify-end text-center'>
                    <Transition.Child
                      as={Fragment}
                      enter='ease-in-out duration-300 transform'
                      enterFrom='translate-x-full scale-95'
                      enterTo='translate-x-100'
                      leave='ease-in-out duration-300 transform'
                      leaveFrom='translate-x-100'
                      leaveTo='translate-x-full'
                    >
                      <Dialog.Panel className='dialog-panel z-50  h-screen max-w-sm transform  text-white text-left shadow-xl transition-all'>
                        {/* User Profile */}
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

// styled component
const Wrapper = styled.section`
  width: 100%;
  height: 100vh;

  .chat-window-section{
    width: 100%;
    height: 100%;
    min-width: auto;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.bg.primary};
  }

  .chat-content{
    width: 100%;
    height: 100vh;
    width: 100%;
    height: 100vh;
    background-color: rgba(${({ theme }) => theme.colors.rgb.primary}, 0.1);
    background-image: url('/images/chat-window-bg.png');
  }

  .loader{
    width: 100%;
    height: 100%;
  }

  .three-dot-btn{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .three-dot-btn{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn{
    width: 43px;
    padding: 0;
    font-size: 1.4rem;
    color: #797c8c;
    cursor: pointer;
    &:hover{
      color: ${({ theme }) => theme.colors.primaryRgb};
    }
  }

  .emoji-picker{
    position: absolute;
    max-width: 100%;
    overflow-y: auto;
    z-index: 100;
    left: 10px;
    bottom: 100px;
  }

  .submit-btn{
    width: 50px;
    height: 43px;
  }

  .dropdown-menu{
    top: 70px;
    z-index: 101;
    font-size: 1.1rem;
    min-width: 15rem;
    right: 0;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.colors.bg.primary};

    button{
      position: relative;
      width: 100%;
      padding: 1.5rem 1.5rem;
      margin-bottom: 20px;
      height: 30px;
      &:hover{
        background-color: ${({ theme }) => theme.colors.bg.secondary};
      }

      h5{
        font-size: 1.1rem;
        margin-bottom: 0;
      }

      .icon-btn{
        width: 43px;
        font-size: 0.8rem;
        padding: 10px;
        border-radius: 50%;
      }

      .btn-outline-primary{
        background-color: rgba(${({ theme }) => theme.colors.btn.primary}, 0.15);
        color: ${({ theme }) => theme.colors.primaryRgb};
      }

      .btn-outline-danger{
        background-color: rgba(${({ theme }) => theme.colors.btn.danger}, 0.15);
        color: ${({ theme }) => theme.colors.danger};
      }

      .btn-outline-light{
        background-color: #eff1f2;
        color: ${({ theme }) => theme.colors.light};
      }

      .icon{
        font-size: 1.1rem;
      }
    }
  }

  .chat-welcome-section{
    width: 100%;
    height: 100vh;
    position: absolute;
    padding: 30px 30px 0;
  }

  .chat-content{
    .arrow-icon{
      background-color: ${({ theme }) => theme.colors.bg.secondary};
    }

    .user-chat-topbar{
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.bg.primary};
      z-index: 50;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      color: ${({ theme }) => theme.colors.heading};
      border-bottom: 1px solid rgba(${({ theme }) => theme.colors.border}, 0.3);
      animation: fadeInLeft 0.5s;
    }

    .chat-conversation{
      overflow-y: scroll;
      height: calc(100vh - 130px);

      .chat-conversation-list{
        margin-top: 90px;
        padding-bottom: 24px;
        margin-bottom: 0;
        animation: fadeInLeft 0.5s;

        li{
          margin: 0;
          display: flex;

          .conversation-list{
            margin-bottom: 24px;
            display: inline-flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
            max-width: 80%;

            .user-name{
              color: ${({ theme }) => theme.colors.heading};
            }

            .chat-avatar{
              position: relative;
              overflow: hidden;
              border-radius: 100%;
              width: 3rem;
              height: 3rem;
            }

            .chat-wrap-content{
              padding: 12px 20px;
              background-color: ${({ theme }) => theme.colors.bg.primary};
              position: relative;
              border-radius: 30px 0 25px 30px;
              box-shadow: 0 2px 4px rgb(15 34 58 / 12%);
              color: ${({ theme }) => theme.colors.heading};
            }

            .conversation-name{
              font-size: 14px;
              font-weight: 500;
              color: ${({ theme }) => theme.colors.text.secondary};
            }
          }
        }

        .chat-list.right{
          justify-content: end;

          .conversation-list{
            text-align: right;
            flex-direction: row-reverse;

            .chat-avatar{
              margin-right: 0;
              margin-left: 16px;
            }

            .chat-wrap-content{
              color: ${({ theme }) => theme.colors.white};
              background-color: rgba(${({ theme }) => theme.colors.rgb.primary}, 0.7);
            }
          }
        }
      }
    }

    .chat-input-section{
      position: sticky;
      left: 0;
      top: 100vh;
      background-color: ${({ theme }) => theme.colors.bg.primary};
      border-top: 1px solid rgba(${({ theme }) => theme.colors.border}, 0.3);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

      input{
        color: ${({ theme }) => theme.colors.heading};
        background-color: ${({ theme }) => theme.colors.bg.secondary};
        &:focus{
          background-color: ${({ theme }) => theme.colors.bg.secondary};
        }
      }

      .dot-btn,
      .emoji-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        &:hover{
          color: ${({ theme }) => theme.colors.primaryRgb};
          background-color: ${({ theme }) => theme.colors.bg.secondary};
        }
        border-radius: 100%;
      }

      .links-list-items{
        .btn{
          color: #fff;
          background-color: ${({ theme }) => theme.colors.primaryRgb};
          &:hover{
            background-color: rgb(${({ theme }) => theme.colors.rgb.primary}, 0.8);
          }
          border-color: ${({ theme }) => theme.colors.primaryRgb};
        }
      }
    }
  }


  @media screen and (min-width: 800px){
    .chat-window-section{
      position: relative;
    }

    .arrow-icon{
      display: none;
    }

    .chat-window-section{
      position: relative;
    }
  }
`;

export default ChatWindow;