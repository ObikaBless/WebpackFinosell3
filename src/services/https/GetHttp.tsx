import axios, { AxiosRequestConfig } from "axios";
import { CONFIG } from "../../config/Config";

interface Get {
  pathname: string;
  payload?: any;
  isProtected?: boolean;
}
export const GetHttp = async ({
  pathname,
  payload,
  isProtected = true,
}: Get) => {
  try {
    const token = window.sessionStorage.getItem("token");
    const headers: AxiosRequestConfig["headers"] = isProtected
      ? { Authorization: `Bearer ${token}` }
      : {};
    const header = { headers };
    // Append your additional headers, including the Content-Type header
    const additionalHeaders = {
      ...header,
      "Content-Type": "multipart/form-data",
    };
    // Converting the payload to queryString
    let data = "";
    Object.keys(payload).forEach((key, id) => {
      const value = payload[key];
      if (id === 0) {
        data = data + `${key}=${value}`;
      } else {
        data = data + `&${key}=${value}`;
      }
    });
    const response = await axios.post(
      `${CONFIG.ROOT_ADDRESS}/${pathname}?${data}`,
      additionalHeaders
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
