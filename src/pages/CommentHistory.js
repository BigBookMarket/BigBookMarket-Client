import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import CommentHistoryCard from "../components/mypage/community/CommentHistoryCard";
import Navbar from "../components/Navbar";
import { getCommentHistory } from "../lib/api/user";

const CommentHistoryWrapper = Styled.div`
  margin: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  .title{
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 90px;
  }
`;

const CommentHistory = () => {
  const [commentHistory, setCommentHistory] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    (async () => {
      const data = await getCommentHistory(userId);
      setCommentHistory(data);
    })();
  }, []);
  return (
    <>
      <Navbar />
      <CommentHistoryWrapper>
        <p className="title">내가 쓴 댓글</p>
        {commentHistory?.map((comment) => (
          <CommentHistoryCard key={comment.commentId} />
        ))}
      </CommentHistoryWrapper>
    </>
  );
};

export default CommentHistory;
