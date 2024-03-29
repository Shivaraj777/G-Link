import { CLEAR_USER_STATE, GET_CURRENT_USER, UPDATE_USER_PROFILE, UPLOAD_PROFILE_PIC } from "./user.action";


// define the initial state
const initialState = {
  userDetails: {}
};


// user reducer
const userReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_CURRENT_USER:
      return {
        ...state,
        userDetails: action.payload
      }

    case UPDATE_USER_PROFILE:
      return {
        ...state,
        userDetails: action.payload
      }

    case UPLOAD_PROFILE_PIC:
      return {
        ...state,
        userDetails: action.payload
      }

    case CLEAR_USER_STATE:
      return {
        userDetails: action.payload
      }

    default: 
      return state;
  }
}


export default userReducer;