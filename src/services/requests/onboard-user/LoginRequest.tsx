import { PostHttp } from "../../https/PostHttp";

export const loginRequest = async (payload: any) => {
  const response = await PostHttp({
    pathname: "/auths/login",
    payload: payload,
  });
  return response
};
