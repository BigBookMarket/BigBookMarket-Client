import React, { useEffect } from "react";
import PostHistoryCard from "../../components/mypage/community/PostHistoryCard";
import { Navbar } from "../../components";
import { Wrapper } from "./style";
import connectStore from "../../hoc/connectStore";

const PostHistory = ({ user: { userHistory }, actions }) => {
  const { myPosts } = userHistory;
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    actions.showPostHistory(userId);
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper>
        <p className="title">내가 쓴 게시글</p>
        {myPosts?.map((post) => (
          <PostHistoryCard key={post.postId} post={post} />
        ))}
      </Wrapper>
    </>
  );
};

export default connectStore(PostHistory);
