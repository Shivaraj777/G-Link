import { CLEAR_AUTH_STORE, ERROR, FORGOT_PASSWORD, RESEND_VERIFICATION_EMAIL, RESET_PASSWORD, SIGN_IN, SIGN_UP, VERIFY_USER_EMAIL } from "./auth.action";

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

    case SIGN_IN:
      return {
        ...state,
        ...action.payload
      }

    case VERIFY_USER_EMAIL:
      return {
        ...state,
        ...action.payload
      }

    case RESEND_VERIFICATION_EMAIL:
      return {
        ...state,
        ...action.payload
      }

    case FORGOT_PASSWORD:
      return {
        ...state,
        ...action.payload
      }

    case RESET_PASSWORD:
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