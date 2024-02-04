import { API_URLs } from "../utils";
import { customFetch } from "./customFetch";

// api call for user signup
export const signup = (newUser) => {
  console.log(newUser);
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