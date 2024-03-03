import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Profile from '../chat/Profile';
import { getGroupProfileDetails, getSenderProfileDetails } from '../../helperFunction/chat.helper';
import GroupProfile from './GroupProfile';

function UserProfile(props) {
  const [activeChat, setActiveChat] = useState(null);
  const [senderProfile, setSenderProfile] = useState();

  const selectedChat = useSelector((state) => state.chat.selectedChat);
  const loggedUser = useSelector((state) => state.user.userDetails);

  // update active chat
  useEffect(() => {
    setActiveChat(selectedChat);
  }, [selectedChat])


  // get sender details
  useEffect(() => {
    let senderData;

    if(activeChat){
      if(!activeChat.isGroupChat){
        senderData = getSenderProfileDetails(loggedUser, activeChat);
      }else{
        senderData = getGroupProfileDetails(loggedUser, activeChat);
      }

      if(senderData){
        setSenderProfile(senderData);
      }
    }

    setSenderProfile(senderData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChat]);


  return activeChat ? (
    <>
      <Wrapper className='sidebar w-full h-full flex justify-center'>
        <div>
          {!activeChat.isGroupChat ? (
            <>
              {/* sender profile data */}
              <div className='sender-profile overflow-hidden sidebar-active w-full h-full'>
                {senderProfile ? (
                  <>
                    <Profile 
                      name={senderProfile.senderName}
                      email={senderProfile.senderEmail}
                      about={senderProfile.senderAbout}
                      contact={senderProfile.senderContact}
                      pic={senderProfile.senderPic}
                      closeModal={props.closeModal}
                    />
                  </>) : (
                    <></>
                  )
                }
              </div>
            </>) : (
              <>
                {/* Group profile data */}
                <div className='sender-profile overflow-hidden sidebar-active w-full h-full'>
                  {senderProfile ? (
                    <>
                      <GroupProfile
                        groupId={senderProfile.groupId}
                        groupPic={senderProfile.groupPic}
                        groupName={senderProfile.groupName}
                        groupCreatedAt={senderProfile.groupCreatedAt}
                        groupCreatedBy={senderProfile.groupCreatedBy}
                        groupAdmin={senderProfile.groupAdmin}
                        groupUsers={senderProfile.groupUsers}
                        closeModal={props.closeModal}
                      />
                    </>) : (
                      <></>
                    )
                  }
                </div>
              </>
            )
          }
        </div>
      </Wrapper> 
    </>) : (
    <></>
  )
}

const Wrapper = styled.section`
  .sender-profile{
    overflow-y: scroll;
    height: 100vh;

    .profile-tab{
      animation: none;
    }

    .chat-menu{
      margin-top: 2rem;
      padding-left: 2rem;
      padding-right: 2rem;

      .icon{
        display: flex;
      }
    }

    .user-details{
      overflow: hidden;
      height: 100%;
    }

    .details{
      .user-profile-image{
        width: 200px;
        height: 200px;

        img{
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;

export default UserProfile;