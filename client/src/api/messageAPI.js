import { API_URLs } from "../utils/constants";
import { customFetch } from './customFetch';

// api call to get all messages for a particular chat
export const getChatMessages = (selectedChat) => {
  return customFetch(API_URLs.getChatMessages(selectedChat), {
    method: 'GET'
  });
}


// api call to send a message for a particular chat
export const sendMessage = (messageData) => {
  return customFetch(API_URLs.sendMessage(), {
    method: 'POST',
    body: {
      content: messageData.content,
      chatId: messageData.chatId
    }
  });
}