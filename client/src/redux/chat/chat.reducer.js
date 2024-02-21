import { FETCH_USER_CHATS, SELECT_CHAT } from "./chat.action"

// initialize the state
const initialState = {
  chats: [],
  selectedChat: {}
}


// chat reducer
const chatReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_USER_CHATS:
      return {
        ...state,
        chats: action.payload
      }

    case SELECT_CHAT:
        return {
          ...state,
          selectedChat: action.payload
        }

    default:
      return state;
  }
}


export default chatReducer;