import { jwtDecode } from "jwt-decode";

//form date from "2021-09-01T00:00:00.000Z" to  Sep 30, 2022

export const fromISODate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

//check email is valid must contain @ and .
export const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
//password not empty
export const isValidPassword = (password: string) => {
  return password.length > 0;
};

//check if password match with confirm password
export const doPasswordsMatch = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
};
//username is not empty and have 6 characters minimum
export const isValidUsername = (username: string) => {
  return username.length >= 6;
};

//valid password contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character and 8 characters minimum
export const isValidPasswordComplexity = (password: string) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
};
export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded: { exp?: number } = jwtDecode(token); // Add type annotation for clarity
    if (!decoded || typeof decoded.exp !== 'number') {
      return true; // If `decoded` or `decoded.exp` is not valid, assume the token is expired
    }
    return Date.now() >= decoded.exp * 1000; // Compare with the current timestamp
  } catch (error) {
    console.error("Error decoding token:", error);
    return true; // Treat errors as an indication of an invalid or expired token
  }
};


export const extractUserObjectFromToken = (token: string): any | null => {
  try {
    const decoded: { user?: any } = jwtDecode(token); // Explicit type for decoded object
    return decoded?.user ?? null; // Return user if it exists, otherwise return null
  } catch (error) {
    console.error("Error decoding token:", error);
    return null; // Return null if the token is invalid or decoding fails
  }
};

