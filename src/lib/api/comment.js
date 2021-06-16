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
