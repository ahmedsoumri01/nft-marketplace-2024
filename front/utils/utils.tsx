//form date from "2021-09-01T00:00:00.000Z" to  Sep 30, 2022

export const fromISODate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

//check email is valid must contain @ and .
export const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
//password not empty
export const isValidPassword = (password: string) => {
  return password.length > 0;
}

//check if password match with confirm password
export const doPasswordsMatch = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
}
//username is not empty and have 6 characters minimum
export const isValidUsername = (username: string) => {
  return username.length >= 6;
}

//valid password contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character and 8 characters minimum
export const isValidPasswordComplexity = (password: string) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
}
