import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002/api";

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response.data; // Assume it returns { token: "..." }
};

export const logoutUser = async () => {
  // If you need to inform the backend of a logout
  await axios.post(`${API_URL}/auth/logout`);
};

export const registerUser = async (credentials: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_URL}/auth/register`, credentials);
  return response.data; // Assume it returns { token: "..." }
};
