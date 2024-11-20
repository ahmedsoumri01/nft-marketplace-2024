import axios from "axios";
import { store } from "@/lib/reduxStore"; // Adjust the path to your Redux store

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002/api";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to attach the token
axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token; // Adjust based on your Redux structure

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
