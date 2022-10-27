import axios from "axios";
import { API_ROOT } from "../config";

// Intercept requests and adds authorization header if the user is logged in

axios.interceptors.request.use(
  (config) => {
    if (config.url.includes(`${API_ROOT}`)) {
      // pass the token here is API is authenticated
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error, "error");
    if (error.response.status === 401) {
      // Handle either refresh or logout
    }
    return Promise.reject(error);
  }
);