import { API_URLs } from "../utils";
import { customFetch } from "./customFetch";

// api call for user signup
export const signup = (newUser) => {
  return customFetch(API_URLs.signup(), {
    method: 'POST',
    body: {
      name: newUser.name,
      email: newUser.email,
      contact: newUser.contact,
      password: newUser.password,
    }
  });
}


// api call for user login
export const login = (user) => {
  return customFetch(API_URLs.login(), {
    method: 'POST',
    body: {
      email: user.email,
      password: user.password
    }
  });
}