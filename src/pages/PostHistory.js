import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import PostHistoryCard from "../components/mypage/community/PostHistoryCard";
import Navbar from "../components/Navbar";
import { getPostHistory } from "../lib/api/user";

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
  const [postHistory, setPostHistory] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    (async () => {
      const data = await getPostHistory(userId);
      setPostHistory(data);
    })();
  }, [postHistory]);
  return (
    <>
      <Navbar />
      <PostHistoryWrapper>
        <p className="title">내가 쓴 게시글</p>
        {postHistory?.map((post) => (
          <PostHistoryCard key={post.postId} post={post} />
        ))}
      </PostHistoryWrapper>
    </>
  );
};

export default PostHistory;
