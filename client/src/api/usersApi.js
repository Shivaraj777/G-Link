import { API_URLs } from "../utils"
import { customFetch } from "./customFetch"


// api call to fetch current user details
export const getUser = () => {
  return customFetch(API_URLs.getUser(), {
    method: 'GET',
  });
}