import { FETCH_CHAT_MESSAGES } from "./message.action"

// initialize the state
const initialState = {
  chatMessages: []
}


// message reducer
const messageReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_CHAT_MESSAGES:
      return {
        ...state,
        chatMessages: action.payload
      }

    default:
      return state;
  }
}


export default messageReducer;