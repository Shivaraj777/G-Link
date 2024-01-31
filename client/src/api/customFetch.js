import { ACCESS_TOKEN_KEY, getFormBody, getItemsFromLocalStorage } from "../utils"

// global fetch function to make api calls
export const customfetch = async (url, {body, ...customConfig}) => {
  const token = getItemsFromLocalStorage(ACCESS_TOKEN_KEY);

  // define the data to be accepted and sent by the application
  const headers = {
    'content-type': 'application/x-www-form-urlencoded'
  }

  // if token exists in LS, add it to Authorization header
  if(token){
    headers.Authorization = `Bearer ${token}`;
  }

  // deine the api call configuration
  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  }

  // encode form data
  if(body){
    config.body = getFormBody(body);
  }

  try{
    const response = await fetch(url, config);
    const data = await response.json(); 

    if(data.success){
      return {
        data: data.data,
        message: data.message,
        success: data.success
      }
    }

    throw new Error(data.message);
  }catch(err){
    console.log(`Error: ${err}`);
    return {
      message: err.message,
      success: false
    }
  }
}