import React from "react";
import Styled from "styled-components";
import { deletePost } from "../../../lib/api/post";

const PostCardWrapper = Styled.div`
width: 850px;
height: 190px;
background-color: var(--theme-color);
margin-bottom: 30px;
display: flex;
align-items: center;
position: relative;

.card__info{
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 50px;
}

.card__post_date{
  color: var(--primary-color);
  font-size: 14px;
  position: absolute;
  right: 50px;
  top: 30px;
}

.card__book_info{
  color: var(--primary-color);
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;
}

.card__post_title{
    font-weight: bold;
    margin-bottom: 10px;
}

.card__post_content{
    overflow: hidden;
    word-break:break-all;
    width: 700px;
    height: 54px;
}

.card__buttons{
  display: flex;
  color: var(--primary-color);
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  right: 46px;
  bottom: 30px;

  & > p:nth-child(2n+1) {
    cursor: pointer;
  }
}
`;

const PostHistoryCard = ({ post }) => {
  const handleModify = () => null;
  const handleDelete = async () => {
    await deletePost(post.postId);
  };
  return (
    <PostCardWrapper>
      <div className="card__info">
        <p className="card__book_info">
          [{post.book.category}] {post.book.title}
          <p>
            {post.book.author} - {post.book.publisher}
          </p>
        </p>
        <p className="card__post_title">
          [{post.category}] {post.title}
        </p>
        <p className="card__post_content">{post.content}</p>
      </div>
      <div className="card__post_date">
        {post.createdDate} | 댓글 수 {post.commentCount}
      </div>
      <div className="card__buttons">
        <p className="card__buttons_modify" onClick={handleModify}>
          수정하기
        </p>
        <p>&nbsp;|&nbsp;</p>
        <p className="card__buttons_delete" onClick={handleDelete}>
          삭제하기
        </p>
      </div>
    </PostCardWrapper>
  );
};

export default PostHistoryCard;
