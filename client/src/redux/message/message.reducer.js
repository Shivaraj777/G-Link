import { FETCH_CHAT_MESSAGES, SEND_MESSAGE } from "./message.action"

// initialize the state
const initialState = {
  chatMessages: [],
  createdMessage: {}
}


// message reducer
const messageReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_CHAT_MESSAGES:
      return {
        ...state,
        chatMessages: action.payload
      }

    case SEND_MESSAGE: 
      return {
        ...state,
        createdMessage: action.payload
      }

    default:
      return state;
  }
}


export default messageReducer;