import { signup as userSignup } from '../../api/authApi';
import { ACCESS_TOKEN_KEY, setItemsInLocalStorage } from '../../utils';

// action types
export const SIGN_UP = 'SIGN_UP';
export const ERROR = 'ERROR';


// signup action creator
export const signup = async (newuser) => {
  const response = await userSignup(newuser);

  if(response.success){
    setItemsInLocalStorage(ACCESS_TOKEN_KEY, response.data.token);
    return {
      type: SIGN_UP,
      payload: response.data
    }
  }else{
    return {
      type: ERROR,
      payload: response.error
    }
  }
}