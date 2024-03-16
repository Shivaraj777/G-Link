// Description: This file contains the urls and constants to make API calls

// site FQDN
// const API_ROOT = 'http://localhost:8000/api/v1';
const API_ROOT = process.env.REACT_APP_API_ROOT_URL;

// api urls
export const API_URLs = {
  signup: () => `${API_ROOT}/user/register`,
  login: () => `${API_ROOT}/user/create-session`,
  verifyEmail: () => `${API_ROOT}/user/verify-email`,
  resendVerificationEmail: () => `${API_ROOT}/user/resend/verification-email`,
  forgotPassword: () => `${API_ROOT}/user/forgot-password`,
  resetPassword: () => `${API_ROOT}/user/reset-password`,
  getUser: () => `${API_ROOT}/user/get-user-detail`,
  searchUsers: (search) => `${API_ROOT}/user/search-users?search=${search}`,
  uploadProfilePic: () => `${API_ROOT}/user/upload/profile-image`,
  updateProfile: () => `${API_ROOT}/user/update-profile`,
  fetchChats: () => `${API_ROOT}/chat/`,
  createGroupChat: () => `${API_ROOT}/chat/create-group`,
  createChat: () => `${API_ROOT}/chat`,
  removeUserFromGroup: () => `${API_ROOT}/chat/remove-from-group`,
  getChatMessages: (selectedChat) => `${API_ROOT}/message/${selectedChat._id}`,
  sendMessage: () => `${API_ROOT}/message/send-message`
}

// G-Link access token
export const ACCESS_TOKEN_KEY = '__glink_token__';

// export const SERVER_ACCESS_BASE_URL = 'http://localhost:8080';
export const SERVER_ACCESS_BASE_URL = process.env.REACT_APP_CHAT_SERVER_FQDN;

