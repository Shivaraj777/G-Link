import { fetchChats, searchUsers } from "../../api/chatApi";


// action types
export const FETCH_USER_CHATS = 'FETCH_USER_CHATS';
export const SELECT_CHAT = 'SELECT_CHAT';
export const FETCH_USERS = 'FETCH_USERS';
export const ERROR = 'ERROR';


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
  const response = await searchUsers(search);

  if(response.success === true){
    dispatch({ type: FETCH_USERS, payload: response.data.users });
  }else{
    dispatch({ type: ERROR, payload: response.error });
  }
} 