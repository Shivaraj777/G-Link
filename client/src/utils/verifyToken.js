import { ACCESS_TOKEN_KEY } from "./constants"
import { getItemsFromLocalStorage } from "./localStorageProp"
import { jwtDecode } from 'jwt-decode';

// verify jwt token
export const verifyToken = () => {
  const userToken = getItemsFromLocalStorage(ACCESS_TOKEN_KEY);
  const decodedJwt = jwtDecode(userToken);

  if(decodedJwt.exp < Date.now()/1000){
    console.log('Token expired')
    return false;
  }else{
    console.log('Authentication successfull');
    return true;
  }
}