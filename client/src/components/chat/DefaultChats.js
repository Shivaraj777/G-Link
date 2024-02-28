import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Searchbar from './Searchbar';
import { useDispatch, useSelector } from 'react-redux';
import { selectChat } from '../../redux/chat/chat.action';
import ChatUserList from './ChatUserList';
import CreateGroupChatModal from '../modal/CreateGroupChatModal';
import { fetchChatMessages } from '../../redux/message/message.action';

function DefaultChats() {
  const dispatch = useDispatch();
  const [openSearchbar, setOpenSearchbar] = useState(false); //state to enable/disable search bar in chat window
  const [searchQuery, setSearchQuery] = useState(''); //state to manage search text
  const [chatList, setChatList] = useState([]); //state to manage logged-in user chats
  const [selectedChat, setSelectedChat] = useState(null); //state to manage the current selected chat

  const chats = useSelector((state) => state.chat.chats); // get all chats for current user from store
  const loggedUser = useSelector((state) => state.user.userDetails);
  // console.log(selectedChat);


  // set user chats
  useEffect(() => {
    setChatList(chats);
  }, [chats]);


  // change selected chat
  useEffect(() => {
    dispatch(selectChat(selectedChat));

    if(selectedChat !== null){
      dispatch(fetchChatMessages(selectedChat));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedChat]);


  return (
    <Wrapper className='default dynamic-sidebar'>
      <div className='chat-menu flex flex-wrap items-center justify-between w-full'>
        {openSearchbar ? (
          <></>) : (
            <>
              <div>
                <h1 className='text-2xl m-0'>Chat</h1>
                <p className='text-gray-400 mb-0'>Start New Conversation</p>
              </div>
            </>
          )
        }

        <div className={openSearchbar ? 'flex justify-center items-center w-full' : 'flex justify-center items-center'}>
          <Searchbar 
            openSearchbar={openSearchbar}
            setOpenSearchbar={setOpenSearchbar}
            setSearchQuery= {setSearchQuery}
          />
          <CreateGroupChatModal />
        </div>
      </div>

      {/* UsersList */}
      <ChatUserList
        searchQuery={searchQuery}
        openSearchbar={openSearchbar}
        setOpenSearchbar={setOpenSearchbar}
        chatList={chatList}
        loggedUser={loggedUser}
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
      />
    </Wrapper>
  )
}

// styled component
const Wrapper = styled.div`
  animation: fadeInLeft 1s;
  .group-icon {
    &:hover {
      background-color: ${({ theme }) => theme.colors.bg.secondary};
      color: ${({ theme }) => theme.colors.primaryRgb};
    }
  }
`;

export default DefaultChats;