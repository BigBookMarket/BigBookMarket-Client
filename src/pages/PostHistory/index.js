import React, { useState, useEffect } from "react";
import PostHistoryCard from "../../components/mypage/community/PostHistoryCard";
import { Navbar } from "../../components";
import { getPostHistory } from "../../lib/api/user";
import { Wrapper } from "./style";

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
      <Wrapper>
        <p className="title">내가 쓴 게시글</p>
        {postHistory?.map((post) => (
          <PostHistoryCard key={post.postId} post={post} />
        ))}
      </Wrapper>
    </>
  );
};

export default PostHistory;
