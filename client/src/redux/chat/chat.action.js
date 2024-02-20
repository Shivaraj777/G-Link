import { fetchChats } from "../../api/chatApi";


// action types
export const FETCH_USER_CHATS = 'FETCH_USER_CHATS';
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