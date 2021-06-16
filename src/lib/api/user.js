import instance from "./instance";

export const getInboxMessage = async (userId) => {
  try {
    const data = await instance.get(`/user/inbox/${userId}`);
    console.log("[SUCCESS] GET INBOX MESSAGE", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] GET INBOX MESSAGE", error);
  }
};

export const getOutboxMessage = async (userId) => {
  try {
    const data = await instance.get(`/user/outbox/${userId}`);
    console.log("[SUCCESS] GET OUTBOX MESSAGE", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] GET OUTBOX MESSAGE", error);
  }
};

export const getPurchaseHistory = async (userId) => {
  try {
    const data = await instance.get(`/user/buy/${userId}`);
    console.log("[SUCCESS] GET PURCHASE HISTORY", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] GET PURCHASE HISTORY", error);
  }
};

export const getSellHistory = async (userId) => {
  try {
    const data = await instance.get(`/user/sale/${userId}`);
    console.log("[SUCCESS] GET SELL HISTORY", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] GET SELL HISTORY", error);
  }
};

export const getPostHistory = async (userId) => {
  try {
    const data = await instance.get(`/user/post/${userId}`);
    console.log("[SUCCESS] GET POST HISTORY", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] GET POST HISTORY", error);
  }
};

export const getCommentHistory = async (userId) => {
  try {
    const data = await instance.get(`/user/comment/${userId}`);
    console.log("[SUCCESS] GET COMMENT HISTORY", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] GET COMMENT HISTORY", error);
  }
};
