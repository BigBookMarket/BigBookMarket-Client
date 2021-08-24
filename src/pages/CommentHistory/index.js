import React, { useState, useEffect } from "react";
import CommentHistoryCard from "../../components/mypage/community/CommentHistoryCard";
import { Navbar } from "../../components";
import { getCommentHistory } from "../../lib/api/user";
import { Wrapper } from "./style";

const CommentHistory = () => {
  const [commentHistory, setCommentHistory] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    (async () => {
      const data = await getCommentHistory(userId);
      setCommentHistory(data);
    })();
  }, [commentHistory]);
  return (
    <>
      <Navbar />
      <Wrapper>
        <p className="title">내가 쓴 댓글</p>
        {commentHistory?.map((comment) => (
          <CommentHistoryCard key={comment.commentId} comment={comment} />
        ))}
      </Wrapper>
    </>
  );
};

export default CommentHistory;
