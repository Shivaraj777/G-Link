import { CLEAR_AUTH_STORE, ERROR, SIGN_UP } from "./auth.action";

// set initial state
const initialState = {};

// auth reducer
const authReducer = (state = initialState, action) => {
  switch(action.type){
    case SIGN_UP:
      return {
        ...state,
        ...action.payload
      }

    case SIGN_UP:
      return {
        ...state,
        ...action.payload
      }

    case CLEAR_AUTH_STORE:
      return {
        ...action.payload
      }

    case ERROR:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
}

export default authReducer;