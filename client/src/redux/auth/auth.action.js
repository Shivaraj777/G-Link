import { signup as userSignup } from '../../api/authApi';
// import { ACCESS_TOKEN_KEY, setItemsInLocalStorage } from '../../utils';

// action types
export const SIGN_UP = 'SIGN_UP';
export const ERROR = 'ERROR';


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