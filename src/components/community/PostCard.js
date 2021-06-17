import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const PostWrapper = Styled.div`
.card{
    position: relative;
    margin-bottom: 20px;
    width: 800px;
    height: 150px;
    padding: 35px;
    background-color: var(--theme-color);
    display: flex;
    text-align: left;
    align-items: center;
  }

  .card__content_title{
      overflow: hidden;
      font-weight: bold;
  }

  .card__content_category{
      color: #3C64B1;
      font-size: 13px;
      font-weight: bold;
  }

  .card__content_content{
    width: 580px;
    height: 65px;
    overflow: hidden;
    word-break:break-all;
  }

  .card-information{
      position: absolute;
      right: 0;
      margin-bottom: 100px;
      margin-right: 35px;
      font-size: 13px;
      font-weight: bold;
      color: #3C64B1;
  }
`;

const PostCard = ({ bookInfo, post }) => {
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
            <p className="card__content_category">[{post.category}]</p>
            <p className="card__content_title">{post.title}</p>
            <p className="card__content_content">{post.content}</p>
          </div>
          <p className="card-information">
            {post.nickname} | {post.createdDate} | 댓글 수 {post.commentCount}
          </p>
        </div>
      </PostWrapper>
    </Link>
  );
};

export default PostCard;
