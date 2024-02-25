import { getUser, uploadProfilePic } from "../../api/usersApi";

// action types
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const UPLOAD_PROFILE_PIC = 'UPLOAD_PROFILE_PIC';
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


// action creator to upload user profile picture
export const uploadUserProfilePic = (image) => async (dispatch) => {
  const response = await uploadProfilePic(image);

  if(response.success === true){
    return dispatch({ type: UPLOAD_PROFILE_PIC, payload: response.data.user });
  }else{
    return dispatch({ type: ERROR, payload: response.error });
  }
}