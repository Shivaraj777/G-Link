import { CLEAR_FETCHED_USERS, CREATE_GROUP_CHAT, FETCH_USERS, FETCH_USER_CHATS, SELECT_CHAT } from "./chat.action"

// initialize the state
const initialState = {
  chats: [],
  selectedChat: {},
  searchedUsers: [],
  createdGroupChat: {}
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

    case CLEAR_FETCHED_USERS:
      return {
        ...state,
        searchedUsers: action.payload
      }

    case CREATE_GROUP_CHAT:
      return {
        ...state,
        createdGroupChat: action.payload
      }

    default:
      return state;
  }
}


export default chatReducer;