import axiosInstance from "@/lib/features/axiosInstance";
//firstTimeLogin
export const firstTimeLogin = async () => {
  return axiosInstance.put(`/users/profile/update/firstTimeLogin`);
};
//completeUserProfile
export const completeUserProfile = async (data: object) => {
  return axiosInstance.put(`/users/profile/update/completeUserProfile`, data);
};
