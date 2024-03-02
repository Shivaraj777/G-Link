import { getChatMessages, sendMessage } from "../../api/messageAPI";

// action types
export const FETCH_CHAT_MESSAGES = 'FETCH_CHAT_MESSAGES';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const UPDATE_FETCH_CHAT_MESSAGES = 'UPDATE_FETCH_CHAT_MESSAGES';
export const TOGGLE_SHOW_LOADING = 'TOGGLE_SHOW_LOADING';
export const ERROR = 'ERROR';


// action creator to fetch all the messages for a chat
export const fetchChatMessages = (selectedChat) => async (dispatch) => {
  dispatch(toggleShowLoading(true));
  const response = await getChatMessages(selectedChat);
  dispatch(toggleShowLoading(false));

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


// action creator to fetch updated messages after sender sends a message
export const updateFetchChatMessages = (messageReceived) => async (dispatch) => {
  try{
    if(!messageReceived.sender){
      return;
    }

    // console.log('...');
    dispatch({ type: UPDATE_FETCH_CHAT_MESSAGES, payload: messageReceived });
  }catch(err){
    return dispatch({ type: ERROR, payload: err });
  }
}


// action creator to toggle loading state
export const toggleShowLoading = (state) => {
  return {
    type: TOGGLE_SHOW_LOADING,
    payload: state
  }
}
