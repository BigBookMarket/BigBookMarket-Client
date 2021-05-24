import React from "react";
import Styled from "styled-components";
import CommentHistoryCard from "../components/CommentHistoryCard";

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
  return (
    <CommentHistoryWrapper>
      <p className="title">내가 쓴 댓글</p>
      <CommentHistoryCard />
      <CommentHistoryCard />
      <CommentHistoryCard />
    </CommentHistoryWrapper>
  );
};

export default CommentHistory;
