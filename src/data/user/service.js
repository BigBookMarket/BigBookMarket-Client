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

export const getSellHistory = async (userId) => {
  const { data } = await axios.get(`/user/sale/${userId}`);
  return data;
};

export const getBuyHistory = async (userId) => {
  const { data } = await axios.get(`/user/buy/${userId}`);
  return data;
};

export const getPostHistory = async (userId) => {
  const { data } = await axios.get(`/user/post/${userId}`);
  return data;
};

export const getCommentHistory = async (userId) => {
  const { data } = await axios.get(`/user/comment/${userId}`);
  return data;
};

export const getOutboxHistory = async (userId) => {
  const { data } = await axios.get(`/user/outbox/${userId}`);
  return data;
};

export const getInboxHistory = async (userId) => {
  const { data } = await axios.get(`/user/inbox/${userId}`);
  return data;
};

export const deleteItem = async (itemId) => {
  await axios.delete(`/item/${itemId}`);
};

export const deletePost = async (postId) => {
  await axios.delete(`/post/${postId}`);
};

export const deleteComment = async (commentId) => {
  await axios.delete(`/comment/${commentId}`);
};
