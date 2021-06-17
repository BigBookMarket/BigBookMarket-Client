import instance from "./instance";

export const writePost = async (post) => {
  try {
    const data = await instance.post("/post", post);
    console.log("[SUCCESS] WRITE POST", data.data);
    alert("게시글 작성이 완료되었습니다");
    return data.data;
  } catch (error) {
    console.log("[FAIL] WRITE POST", error);
  }
};

export const getPost = async (postId) => {
  try {
    const data = await instance.get(`/post/${postId}`);
    console.log("[SUCCESS] GET POST", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] GET POST", error);
  }
};

export const updatePost = async (postId) => {
  try {
    const data = await instance.put(`/post/${postId}`);
    console.log("[SUCCESS] UPDATE POST", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] UPDATE POST", error);
  }
};

export const getPostList = async (bookId) => {
  try {
    const data = await instance.get(`/post/list/${bookId}`);
    console.log("[SUCCESS] GET POST LIST", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] GET POST LIST", error);
  }
};

export const deletePost = async (postId) => {
  try {
    const data = await instance.delete(`/post/${postId}`);
    console.log("[SUCCESS] DELETE POST", data.data);
    return data.data;
  } catch (error) {
    console.log("[FAIL] DELETE POST", error);
  }
};

export const getPostCategory = async (category) => {
  try {
    const data = instance.get(`/item/list/${category}`);
    console.log(
      "[SUCCESS] GET product list data",
      data.data.filter((item, idx) => {
        return (
          data.data.findIndex((item2, j) => {
            return item.book.bookId === item2.book.bookId;
          }) === idx
        );
      })
    );
    return data.data.filter((item, idx) => {
      return (
        data.data.findIndex((item2, j) => {
          return item.book.bookId === item2.book.bookId;
        }) === idx
      );
    });
  } catch (e) {
    console.log("[FAIL] GET product list data");
    return null;
  }
};
