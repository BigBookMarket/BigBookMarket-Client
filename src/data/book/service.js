import axios from "../../utils/axios";

export const fetchBookCategories = async () => {
  const { data } = await axios.get("/book/category");
  return data;
};

export const fetchBooks = async (categoryName) => {
  const { data } = await axios.get(`/book/list/${categoryName}`);
  return data;
};
