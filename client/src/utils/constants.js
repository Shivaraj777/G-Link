// Description: This file contains the urls and constants to make API calls

// site FQDN
const API_ROOT = 'https://localhost:8000/api/v1';

// api urls
export const API_URLs = {
    signup: () => `${API_ROOT}/user/register`,
}

// G-Link access token
export const ACCESS_TOKEN_KEY = '__glink_token__';
