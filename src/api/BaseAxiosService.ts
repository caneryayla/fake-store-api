import axios from "axios";

export const BaseAxiosService = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 10000,
});

BaseAxiosService.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
