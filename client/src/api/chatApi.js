import { API_URLs } from "../utils"
import { customFetch } from "./customFetch"

// api call to fetch related chats for current user
export const fetchChats = () => {
  return customFetch(API_URLs.fetchChats(), {
    method: 'GET'
  });
}


// api call to fetch users based on search text
export const searchUsers = (search) => {
  return customFetch(API_URLs.searchUsers(search), {
    method: 'GET'
  });
}


// api call to create group chat
export const createGroupChat = (groupChat) => {
  return customFetch(API_URLs.createGroupChat(), {
    method: 'POST',
    body: {
      groupName: groupChat.name,
      groupUsers: groupChat.users
    }
  });
}