import instance from "./instance";

export const writeMessage = async () => {
  try {
    const data = await instance.post("/message");
    console.log("[SUCCESS] WRITE MESSAGE", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] WRITE MESSAGE", error);
  }
};

export const getMessage = async (messageId) => {
  try {
    const data = await instance.get(`/message/${messageId}`);
    console.log("[SUCCESS] GET MESSAGE", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] GET MESSAGE", error);
  }
};
