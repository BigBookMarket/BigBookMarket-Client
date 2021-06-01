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
