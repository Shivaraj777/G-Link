// Description: This file contains the urls and constants to make API calls

// site FQDN
// const API_ROOT = 'https://g-link-api.onrender.com/api/v1';
const API_ROOT = 'http://localhost:8000/api/v1';

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
  createChat: () => `${API_ROOT}/chat`
}

// G-Link access token
export const ACCESS_TOKEN_KEY = '__glink_token__';

