import { forgotPassword, login, resendVerificationEmail, resetPassword, signup as userSignup, verifyUserEmail } from '../../api/authApi';
import { ACCESS_TOKEN_KEY, setItemsInLocalStorage } from '../../utils';

// action types
export const SIGN_UP = 'SIGN_UP';
export const ERROR = 'ERROR';
export const CLEAR_AUTH_STORE = 'CLEAR_AUTH_STORE';
export const SIGN_IN = 'SIGN_IN';
export const VERIFY_USER_EMAIL = 'VERIFY_USER_EMAIL';
export const RESEND_VERIFICATION_EMAIL = 'RESEND_VERIFICATION_EMAIL';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';


// signup action creator
export const signup = (newuser) => async (dispatch) => {
  const response = await userSignup(newuser);

  if(response.success === true){
    // setItemsInLocalStorage(ACCESS_TOKEN_KEY, response.data.token);
    const payload = {
      ...response.data.user,
      message: response.message,
      success: response.success
    };
    // console.log(payload);

    return dispatch({ type: SIGN_UP, payload: payload });
  }else{
    return dispatch({ type: ERROR, payload: response });
  }
}


// action to login a user
export const signin = (user) => async (dispatch) => {
  const response = await login(user);
  
  if(response.success === true){
    const payload = {
      token: response.data.token,
      message: response.message,
      success: response.success
    }

    // store the token in local storage
    setItemsInLocalStorage(ACCESS_TOKEN_KEY, payload.token);

    return dispatch({ type: SIGN_IN, payload: payload });
  }else{
    return dispatch({ type: ERROR, payload: response });
  }
}


// verify email action creator
export const verifyEmail = (token) => async(dispatch) => {
  const response = await verifyUserEmail(token);

  if(response.success === true){
    const payload = {
      message: response.message,
      success: response.success
    }

    return dispatch({ type: VERIFY_USER_EMAIL, payload: payload });
  }else{
    return dispatch({ type: ERROR, payload: response });
  }
}


// action creator to resend verification email
export const resendEmail = (email) => async (dispatch) => {
  const response = await resendVerificationEmail(email);

  if(response.success === true){
    const payload = {
      message: response.message,
    }

    return dispatch({ type: RESEND_VERIFICATION_EMAIL, payload: payload });
  }else{
    return dispatch({ type: ERROR, payload: response });
  }
}


// action creator for forgot password scenario
export const forgotPasswordScenario = (email) => async (dispatch) => {
  const response = await forgotPassword(email);

  if(response.success === true){
    const payload = {
      message: response.message,
      success: response.success
    }

    return dispatch({ type: FORGOT_PASSWORD, payload: payload });
  }else{
    return dispatch({ type: ERROR, payload: response });
  }
}


// action creator to reset user password
export const resetUserPassword = (userData) => async (dispatch) => {
  const response = await resetPassword(userData);

  if(response.success === true){
    const payload = {
      message: response.message,
      success: response.success
    }

    return dispatch({ type: RESET_PASSWORD, payload: payload });
  }else{
    return dispatch({ type: ERROR, payload: response });
  }
}


// action to clear auth store
export const clearAuthStore = () => async (dispatch) => {
  try{
    return dispatch({ type: CLEAR_AUTH_STORE, payload: {} });
  }catch(err){
    return dispatch({ type: ERROR, payload: err });
  }
}