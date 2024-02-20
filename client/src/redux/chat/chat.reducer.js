import { FETCH_USER_CHATS } from "./chat.action"

// initialize the state
const initialState = {
  chats: []
}


// chat reducer
const chatReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_USER_CHATS:
      return {
        ...state,
        chats: action.payload
      }

    default:
      return state;
  }
}


export default chatReducer;