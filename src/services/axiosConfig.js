import { AUTH_TOKEN, BASE_URL } from "../config/appConfig";
import { PROFILE } from "../redux/constants/authConst";
import { notification } from "antd";
import axios from "axios";

const TOKEN_PAYLOAD_KEY = "authorization";

const service = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

service.interceptors.request.use(
  (config) => {
    // config.headers.auth
    const jwtToken = localStorage.getItem(AUTH_TOKEN);

    if (jwtToken) {
      config.headers[TOKEN_PAYLOAD_KEY] = `Bearer ${jwtToken}`;
    }

    return config;
  },
  (error) => {
    notification.error({
      message: "Error",
      description: error.message,
    });
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    let notificationParam = { message: "", description: "" };
    if (error.response.status === 401 || error.response.status === 403) {
      notificationParam.message = "Authentication Fail";
      notificationParam.description = "Please login again";
      localStorage.removeItem(AUTH_TOKEN);
      localStorage.removeItem(PROFILE);

      window.location.reload();
    }

    if (error.response.status === 404) {
      notificationParam.message = "Not Found";
    }

    if (error.response.status === 500) {
      notificationParam.message = "Internal Server Error";
    }

    if (error.response.status === 508) {
      notificationParam.message = "Time Out";
    }

    notification.error(notificationParam);

    return Promise.reject(error);
  }
);

export default service;
