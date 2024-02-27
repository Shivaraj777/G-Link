import { getChatMessages } from "../../api/messageAPI";

// action types
export const FETCH_CHAT_MESSAGES = 'FETCH_CHAT_MESSAGES';
export const ERROR = 'ERROR';


// action creator to fetch all the messages for a chat
export const fetchChatMessages = (selectedChat) => async (dispatch) => {
  const response = await getChatMessages(selectedChat);

  if(response.success === true){
    return dispatch({ type: FETCH_CHAT_MESSAGES, payload: response.data.messages });
  }else{
    return dispatch({ type: ERROR, payload: response.error });
  }
}