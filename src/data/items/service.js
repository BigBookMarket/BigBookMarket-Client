import axios from "../../utils/axios";

export const fetchItems = async (categoryName) => {
  const { data } = await axios.get(`/item/list/${categoryName}`);
  return data;
};

export const getItemDetail = async (itemId) => {
  const { data } = await axios.get(`/item/${itemId}`);
  console.log("[SUCCESS] GET PRODUCT INFO", data);
  return data;
};
