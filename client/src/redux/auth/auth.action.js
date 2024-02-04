import { signup as userSignup } from '../../api/authApi';
// import { ACCESS_TOKEN_KEY, setItemsInLocalStorage } from '../../utils';

// action types
export const SIGN_UP = 'SIGN_UP';
export const ERROR = 'ERROR';
export const CLEAR_AUTH_STORE = 'CLEAR_AUTH_STORE';


// signup action creator
export const signup = (newuser) => async (dispatch) => {
  const response = await userSignup(newuser);

  if(response.success){
    // setItemsInLocalStorage(ACCESS_TOKEN_KEY, response.data.token);
    const payload = {
      ...response.data.user,
      message: response.message,
      success: response.success
    };
    // console.log(payload);

    return dispatch({ type: SIGN_UP, payload: payload });
  }else{
    return dispatch({ type: ERROR, payload: response.error });
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