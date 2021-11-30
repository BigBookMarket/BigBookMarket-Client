import React, { useEffect } from "react";
import CommentHistoryCard from "../../components/mypage/community/CommentHistoryCard";
import { Navbar } from "../../components";
import { Wrapper } from "./style";
import connectStore from "../../hoc/connectStore";

const CommentHistory = ({ user: { userHistory }, actions }) => {
  const { myComments } = userHistory;
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    actions.showCommentHistory(userId);
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper>
        <p className="title">내가 쓴 댓글</p>
        {myComments?.map((comment) => (
          <CommentHistoryCard key={comment.commentId} comment={comment} />
        ))}
      </Wrapper>
    </>
  );
};

export default connectStore(CommentHistory);
