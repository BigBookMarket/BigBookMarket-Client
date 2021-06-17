import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const PostWrapper = Styled.div`
.card{
    position: relative;
    margin-bottom: 20px;
    width: 800px;
    height: 150px;
    padding: 0 40px;
    background-color: var(--theme-color);
    display: flex;
    text-align: left;
  }

  .card__content_title{
      overflow: hidden;
      font-weight: bold;
      font-size: 17px;
      margin-top: 10px;
  }

  .card__content_category{
      color: #3C64B1;
      font-size: 13px;
      font-weight: bold;
      margin-top: 20px;
  }

  .card__content_content{
    font-size: 14px;
    width: 640px;
    height: 65px;
    margin-top: 10px;
    word-break: break-all;
  }

  .card-information{
      position: absolute;
      right: 0;
      top: 20px;
      margin-bottom: 100px;
      margin-right: 35px;
      font-size: 13px;
      color: #3C64B1;
  }
`;

const PostCard = ({ post }) => {
  const showCategory = () => {
    switch (post.category) {
      case "QUESTION":
        return "질문";
      case "REVIEW":
        return "후기";
      case "REVISION":
        return "개정";
      case "FREE":
        return "자유";
      default:
        return;
    }
  };
  return (
    <Link
      style={{ textDecoration: "none", color: "inherit" }}
      to={{
        pathname: `/post/${post.postId}`,
        state: {
          postInfo: post,
        },
      }}
    >
      <PostWrapper>
        <div className="card">
          <div className="card__content">
            <p className="card__content_category">[{showCategory()}]</p>
            <p className="card__content_title">{post.title}</p>
            <p className="card__content_content">{post.content}</p>
          </div>
          <p className="card-information">
            {post.nickname}님 | {post.createdDate} | 댓글 수 {post.commentCount}
          </p>
        </div>
      </PostWrapper>
    </Link>
  );
};

export default PostCard;
