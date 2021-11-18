import axios from "../../utils/axios";

export const logInUser = async (loginInfo) => {
  const { data } = await axios.post("/auth/login", loginInfo);
  return data;
};

export const setToken = (data) => {
  localStorage.setItem("authenticationToken", data.authenticationToken);
  localStorage.setItem("refreshToken", data.refreshToken);
  localStorage.setItem("userId", data.id);
  localStorage.setItem("nickname", data.nickname);
};

export const removeToken = () => {
  localStorage.removeItem("authenticationToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userId");
  localStorage.removeItem("nickname");
};

export const getUserInfo = () => {
  const userInfo = {
    id: localStorage.getItem("userId"),
    refreshToken: localStorage.getItem("refreshToken")
  };
  return userInfo;
};

export const logOutUser = async (userInfo) => {
  removeToken();
  await axios.post("/auth/logout", userInfo);
};

export const signupUser = async (signupInfo) => {
  await axios.post("/auth/signup", signupInfo);
};
