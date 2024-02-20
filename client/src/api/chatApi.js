import { API_URLs } from "../utils"
import { customFetch } from "./customFetch"

// api call to fetch related chats for current user
export const fetchChats = () => {
  return customFetch(API_URLs.fetchChats(), {
    method: 'GET'
  });
}