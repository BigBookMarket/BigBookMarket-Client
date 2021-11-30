import axios from "../../utils/axios";
import history from "../../utils/history";

export const getAllItems = async () => {
  const { data } = await axios.get("/item/list");
  return data;
};

export const fetchItems = async (categoryName) => {
  const { data } = await axios.get(`/item/list/${categoryName}`);
  return data;
};

export const getItemDetail = async (itemId) => {
  const { data } = await axios.get(`/item/${itemId}`);
  console.log("[SUCCESS] GET PRODUCT INFO", data);
  return data;
};

export const dealItem = async (itemId, buyerId) => {
  await axios.put(`/item/deal/${itemId}`, buyerId);
};

export const cancelItem = async (itemId, userId) => {
  await axios.put(`/item/cancel/${itemId}`, userId);
};

export const buyItem = async (itemId) => {
  await axios.put(`/item/sold/${itemId}`);
};

export const sellItem = async (item) => {
  try {
    await axios.post("/item", item);
    alert("판매글 작성이 완료되었습니다");
    history.push("/market");
  } catch (error) {
    console.log(error);
  }
};
