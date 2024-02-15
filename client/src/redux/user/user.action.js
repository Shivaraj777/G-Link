import { getUser } from "../../api/usersApi";

// action types
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const ERROR = 'ERROR';


// action creator to get current user details
export const getCurrentUser = () => async (dispatch) => {
  const response = await getUser();

  if(response.success === true){
    return dispatch({ type: GET_CURRENT_USER, payload: response.data.userDetails });
  }else{
    return dispatch({ type: ERROR, payload: response.error });
  }
}