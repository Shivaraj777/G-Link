import { createChat, createGroupChat, fetchChats, searchUsers } from "../../api/chatApi";


// action types
export const LOADING_USERS = 'LOADING_USERS';
export const FETCH_USER_CHATS = 'FETCH_USER_CHATS';
export const SELECT_CHAT = 'SELECT_CHAT';
export const FETCH_USERS = 'FETCH_USERS';
export const CLEAR_FETCHED_USERS = 'CLEAR_FETCHED_USERS';
export const CREATE_GROUP_CHAT = 'CREATE_GROUP_CHAT';
export const CREATE_CHAT = 'CREATE_CHAT';
export const ERROR = 'ERROR';


// action creator to set loading state(load while fetching users)
export const loadingUsers = (state) => {
  return {
    type: LOADING_USERS,
    payload: state
  }
}


// action creator to fetch related chats for a user
export const fetchUserChats = () => async (dispatch) => {
  const response = await fetchChats();

  if(response.success === true){
    return dispatch({ type: FETCH_USER_CHATS, payload: response.data.userChats });
  }else{
    return dispatch({ type: ERROR, payload: response.error });
  }
}


// action creator to select a particular chat
export const selectChat = (selectedChat) => async (dispatch) => {
  try{
    return dispatch({ type: SELECT_CHAT, payload: selectedChat });
  }catch(err){
    return dispatch({ type: ERROR, payload: err });
  }
}


// action creator to fetch users based on search text(creating one-one/group chat)
export const fetchUsers = (search) => async (dispatch) => {
  dispatch(loadingUsers(true));
  const response = await searchUsers(search);
  dispatch(loadingUsers(false));

  if(response.success === true){
    return dispatch({ type: FETCH_USERS, payload: response.data.users });
  }else{
    return dispatch({ type: ERROR, payload: response.error });
  }
} 


// action creator to clear fetched/searched users
export const clearFetchedUsers = () => async (dispatch) => {
  try{
    return dispatch({ type: CLEAR_FETCHED_USERS, payload: [] });
  }catch(err){
    return dispatch({ type: ERROR, payload: err });
  }
}


// action creator to create group chat
export const createeGroupChat = (chatDetails) => async (dispatch) => {
  const response = await createGroupChat(chatDetails);

  if(response.success === true){
    return dispatch({ type: CREATE_GROUP_CHAT, payload: response.data.groupChat })
  }else{
    return dispatch({ type: ERROR, payload: response.error });
  }
}


// action creator to create new one-one chat
export const createNewChat = (userId) => async (dispatch) => {
  const response = await createChat(userId);

  if(response.success === true){
    dispatch({ type: CREATE_CHAT, payload: response.data.chatData });
  }else{
    dispatch({ type: ERROR, payload: response.error });
  }
} 