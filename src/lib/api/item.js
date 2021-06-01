import instance from "./instance";

export const writeProductSell = async (product) => {
  try {
    const data = await instance.post("/item", product);
    console.log("[SUCCESS] POST WRITE PRODUCT SELL", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] POST WRITE PRODUCT SELL", error);
  }
};

export const getProductInfo = async (itemId) => {
  try {
    const data = await instance.get(`/item/${itemId}`);
    console.log("[SUCCESS] GET PRODUCT INFO", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL]  GET PRODUCT INFO", error);
  }
};

export const modifyProductInfo = async (itemId) => {
  try {
    const data = await instance.put(`/item/${itemId}`);
    console.log("[SUCCESS] PUT PRODUCT INFO", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] PUT PRODUCT INFO", error);
  }
};

export const deleteProduct = async (itemId) => {
  try {
    const data = await instance.delete(`/item/${itemId}`);
    console.log("[SUCCESS] DELETE PRODUCT", data.data);
    alert("삭제되었습니다");
    return data.data;
  } catch (error) {
    console.log("[FAIL] DELETE PRODUCT", error);
    alert("삭제가 불가능합니다");
  }
};

export const getAllProducts = async () => {
  try {
    const data = await instance.get("/item/list");
    console.log("[SUCCESS] GET ALL PRODUCTS", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] GET ALL PRODUCTS", error);
  }
};

export const getCategoryProducts = async (category) => {
  try {
    const data = await instance.get(`/item/list/${category}`);
    console.log("[SUCCESS] GET CATEGORY PRODUCTS", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] GET CATEGORY PRODUCTS", error);
  }
};

export const dealPurchase = async (itemId, buyerId) => {
  try {
    const data = await instance.put(`/item/deal/${itemId}`, buyerId);
    console.log("[SUCCESS] PUT DEAL PURCHASE", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] PUT DEAL PURCHASE", error);
  }
};

export const cancelPurchase = async (itemId, userId) => {
  try {
    const data = await instance.put(`/item/cancel/${itemId}`, userId);
    console.log("[SUCCESS] PUT CANCEL PURCHASE", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] PUT CANCEL PURCHASE", error);
  }
};

export const completePurchase = async (itemId) => {
  try {
    const data = await instance.put(`/item/sold/${itemId}`);
    console.log("[SUCCESS] PUT COMPLETE PURCHASE", data.data);
    alert("거래완료되었습니다");
    return data.data;
  } catch (error) {
    console.log("[FAIL] PUT COMPLETE PURCHASE", error);
  }
};
