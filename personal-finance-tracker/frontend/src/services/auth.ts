import API from "./api";

export const signup = (data: {
  username: string;
  email: string;
  password: string;
}) => {
  return API.post("/auth/signup", data);
};

export const signin = (data: {
  email: string;
  password: string;
}) => {
  return API.post("/auth/signin", data);
};