import instance from "./instance";

export const writeComment = async (newComment) => {
  try {
    const data = await instance.post("/comment", newComment);
    console.log("[SUCCESS] WRITE COMMENT", data.data);
    alert("댓글작성이 완료되었습니다");
    return data.data;
  } catch (error) {
    console.log("[FAIL] WRITE COMMENT", error);
  }
};

export const deleteComment = async (commentId) => {
  try {
    const data = await instance.delete(`/comment/${commentId}`);
    console.log("[SUCCESS] DELETE COMMENT", data.data);
    alert("댓글이 삭제되었습니다");
    return data.data;
  } catch (error) {
    console.log("[FAIL] DELETE COMMENT", error);
  }
};

export const updateComment = async (commentId, updatedComment) => {
  try {
    const data = await instance.put(`/comment/${commentId}`, updatedComment);
    console.log("[SUCCESS] UPDATE COMMENT", data.data);
    alert("댓글이 수정되었습니다");
    return data.data;
  } catch (error) {
    console.log("[FAIL] UPDATE COMMENT", error);
  }
};
