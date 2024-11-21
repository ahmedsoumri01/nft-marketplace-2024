import axiosInstance from "@/lib/features/axiosInstance";
//firstTimeLogin
export const firstTimeLogin = async () => {
  return axiosInstance.put(`/users/profile/update/firstTimeLogin`);
};
//completeUserProfile
export const completeUserProfile = async (data: object) => {
  return axiosInstance.put(`/users/profile/update/completeUserProfile`, data);
};

//getUser
export const getUser = async () => {
  return axiosInstance.get(`/users/profile`);
};

//updateUserBio
export const updateUserBio = async (bio: string) => {
  return axiosInstance.put(`/users/profile/update/bio`, { bio });
};
//updateUsername
export const updateUsername = async (username: string) => {
  return axiosInstance.put(`/users/profile/update/username`, { username });
};

//updateSocialLinks
export const updateSocialLinks = async (links: object) => {
  return axiosInstance.put(`/users/profile/update/socialLinks`, links);
};
