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
