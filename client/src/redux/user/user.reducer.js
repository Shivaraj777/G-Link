import { GET_CURRENT_USER, UPLOAD_PROFILE_PIC } from "./user.action";


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

    case UPLOAD_PROFILE_PIC:
      return {
        ...state,
        userDetails: action.payload
      }

    default: 
      return state;
  }
}


export default userReducer;