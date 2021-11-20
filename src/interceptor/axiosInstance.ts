import axios from "axios";
import { apiRoutes } from "../routes/routeConstants/apiRoutes";

const axiosInstance = axios.create({
  baseURL: apiRoutes.BASE_URL,
  timeout: 20000,
});

const getHeaders = () => {
  return {
    "Content-Type": "application/json",
  };
};

axiosInstance.interceptors.request.use((config) => {
  config.headers = getHeaders();
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return {
      data: response.data,
      message: response.statusText,
      status: response.status,
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
