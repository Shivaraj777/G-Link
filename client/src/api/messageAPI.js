import { API_URLs } from "../utils/constants";
import { customFetch } from './customFetch';

// api call to get all messages for a particular chat
export const getChatMessages = (selectedChat) => {
  return customFetch(API_URLs.getChatMessages(selectedChat), {
    method: 'GET'
  });
}