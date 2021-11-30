import axios from "../../utils/axios";

export const sendMessage = async (message) => {
  const { data } = await axios.post("/message", message);
  return data;
};
