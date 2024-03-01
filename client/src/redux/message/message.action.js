import { getChatMessages, sendMessage } from "../../api/messageAPI";

// action types
export const FETCH_CHAT_MESSAGES = 'FETCH_CHAT_MESSAGES';
export const SEND_MESSAGE = 'SEND_MESSAGE';
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


// action creator to send a message
export const sendMessagee = (messageData) => async (dispatch) => {
  const response = await sendMessage(messageData);

  if(response.success === true){
    return dispatch({ type: SEND_MESSAGE, payload: response.data.newMessage });
  }else{
    return dispatch({ type: ERROR, payload: response.error });
  }
}
