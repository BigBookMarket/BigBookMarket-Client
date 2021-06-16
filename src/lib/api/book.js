import instance from "./instance";

export const getCategoryList = async () => {
  try {
    const data = await instance.get("/book/category");
    console.log("[SUCCESS] GET CATEGORY LIST", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] GET CATEGORY LIST", error);
  }
};

export const getAllBooks = async () => {
  try {
    const data = await instance.get("/book/list");
    console.log("[SUCCESS] GET ALL BOOKS", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] GET ALL BOOKS", error);
  }
};

export const getCategoryBooks = async (category) => {
  try {
    const data = await instance.get(`/book/list/${category}`);
    console.log("[SUCCESS] GET CATEGORY BOOKS", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] GET CATEGORY BOOKS", error);
  }
};
