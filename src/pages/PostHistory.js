import React from "react";
import Styled from "styled-components";
import PostHistoryCard from "../components/mypage/community/PostHistoryCard";
import Navbar from "../components/Navbar";

const PostHistoryWrapper = Styled.div`
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

const PostHistory = () => {
  return (
    <>
      <Navbar />
      <PostHistoryWrapper>
        <p className="title">내가 쓴 게시글</p>
        <PostHistoryCard />
        <PostHistoryCard />
        <PostHistoryCard />
      </PostHistoryWrapper>
    </>
  );
};

export default PostHistory;
