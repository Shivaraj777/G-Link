import { FETCH_USERS, FETCH_USER_CHATS, SELECT_CHAT } from "./chat.action"

// initialize the state
const initialState = {
  chats: [],
  selectedChat: {},
  searchedUsers: []
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

    case FETCH_USERS:
      return {
        ...state,
        searchedUsers: action.payload
      }

    default:
      return state;
  }
}


export default chatReducer;