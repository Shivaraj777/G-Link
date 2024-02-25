import { API_URLs } from "../utils"
import { customFetch } from "./customFetch"
import axios from 'axios';


// api call to fetch current user details
export const getUser = () => {
  return customFetch(API_URLs.getUser(), {
    method: 'GET',
  });
}


// api call to upload user profile picture
export const uploadProfilePic = async (image) => {
  try{
    const response = await axios({
      method: 'PUT',
      url: API_URLs.uploadProfilePic(),
      data: { image },
      headers: { "Content-Type": "multipart/form-data" }
    });
    // console.log(response);

    if(response.data.success === true){
      return {
        data: response.data.data,
        message: response.data.message,
        success: true,
      }
    }

    throw new Error(response.data)
  }catch(err){
    console.log(`Error: ${err}`);
    return {
      error: err,
      message: err.message,
      success: false
    }
  }
}