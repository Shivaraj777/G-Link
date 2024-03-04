import { FETCH_CHAT_MESSAGES, SEND_MESSAGE, SHOW_NETWORK_ERROR, TOGGLE_SHOW_LOADING, UPDATE_FETCH_CHAT_MESSAGES } from "./message.action"

// initialize the state
const initialState = {
  chatMessages: [],
  createdMessage: {},
  isLoading: false,
  isNetworkError: false
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

    case UPDATE_FETCH_CHAT_MESSAGES:
      return {
        ...state,
        chatMessages: [...state.chatMessages, action.payload]
      }

    case TOGGLE_SHOW_LOADING: 
      return {
        ...state,
        isLoading: action.payload
      }

    case SHOW_NETWORK_ERROR:
      return {
        ...state,
        isNetworkError: action.payload
      }

    default:
      return state;
  }
}


export default messageReducer;