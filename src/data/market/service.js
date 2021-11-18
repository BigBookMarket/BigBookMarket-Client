import axios from "../../utils/axios";

export const getItemList = async () => {
  const { data } = await axios.get("/item/list");
  console.log(data);
  return data;
};
