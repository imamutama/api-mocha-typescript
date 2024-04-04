import { Login } from "tests/types/custom";

export const payloadLogin = (value: Login) => {
  return {
    email: value.email,
    password: value.password,
  };
};

export const payloadLoginFailed = (value: string) => {
  return {
    email: value,
  };
};
