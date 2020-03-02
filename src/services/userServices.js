import http from "./httpServices";
import { apiUrl } from "../config.json";

const userUrl = apiUrl + "/users";

export function registerUser(user) {
  const userToRegister = {
    email: user.username,
    password: user.password,
    name: user.name
  };
  return http.post(userUrl, userToRegister);
}
