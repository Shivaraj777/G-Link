// Description: This file contains the urls and constants to make API calls

// site FQDN
// const API_ROOT = 'https://g-link-api.onrender.com/api/v1';
const API_ROOT = 'http://localhost:8000/api/v1';

// api urls
export const API_URLs = {
  signup: () => `${API_ROOT}/user/register`,
  login: () => `${API_ROOT}/user/create-session`,
  verifyEmail: () => `${API_ROOT}/user/verify-email`
}

// G-Link access token
export const ACCESS_TOKEN_KEY = '__glink_token__';

