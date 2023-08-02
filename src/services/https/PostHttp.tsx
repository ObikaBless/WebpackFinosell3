import axios, { AxiosRequestConfig } from "axios";
import { CONFIG } from "../../config/Config";

interface Post {
  pathname: string;
  payload: any;
  isProtected?: boolean;
}

export const PostHttp = async ({
  pathname,
  payload,
  isProtected = false,
}: Post) => {
  const formData = new FormData();
  try {
    const token = window.sessionStorage.getItem("token");
    const headers: AxiosRequestConfig["headers"] = isProtected
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        }
      : { "Content-Type": "multipart/form-data" };

    const header = { headers, "Content-Type": "application/json" };
    // Convert payload to formdata
    Object.keys(payload).forEach((key) => {
      const value = payload[key];
      formData.append(key, value);
    });
    // *************
    const response = await axios.post(
      `${CONFIG.ROOT_ADDRESS}${pathname}`,
      formData,
      header
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
