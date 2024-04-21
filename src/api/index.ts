import axios from "axios";

import { ACCESS_TOKEN_STORAGE_KEY } from "@/constants";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const ERROR_MESSAGES: { [x: string | number]: string } = {
  UNKNOWN: "예기치 않은 에러가 발생했습니다. 다시 시도해주세요.",
};

const axiosInstance = axios.create({
  baseURL: publicRuntimeConfig.API_BASE_URL,
});


axiosInstance.interceptors.request.use(function(config) {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use((res) => res, handleError);

export async function handleError(error: {
  response: { status: never; data: never };
  message: string;
}) {
  if (error.response) {
    if (error.response.status === 401 || error.response.status === 403) {
      error.message = "로그인이 만료되었습니다. 다시 로그인해주세요";
      localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
    }
    if (error.response?.data) {
      const { status, data } = error.response;

      const { code } = data;
      if (ERROR_MESSAGES[code]) {
        error.message = ERROR_MESSAGES[code];
      } else {
        error.message = ERROR_MESSAGES.UNKNOWN;
      }
    }
  }
}

export default axiosInstance;
