import React from "react";
import Styled from "styled-components";
import { deleteComment } from "../../../lib/api/comment";

const CommentCardWrapper = Styled.div`
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

.card_info{
  color: #3C64B1;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  right: 50px;
  top: 36px;
}

.card__product_info{
  color: #3C64B1;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 25px;
}

.card__comment_title{
    font-weight: bold;
    margin-bottom: 10px;
}

.card__comment_content{
    overflow: hidden;
    word-break:break-all;
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

const CommentHistoryCard = ({ comment }) => {
  const handleModify = () => null;
  const handleDelete = async () => {
    await deleteComment(comment.commentId);
  };
  return (
    <CommentCardWrapper>
      <div className="card__info">
        <p className="card__product_info">
          [{comment.bookCategory}] {comment.bookTitle}
        </p>
        <p className="card__comment_title">
          [{comment.postCategory}] {comment.postTitle}
        </p>
        <p className="card__comment_content">{comment.content}</p>
      </div>
      <div className="card_info">{comment.createdDate}</div>
      <div className="card__buttons">
        <p className="card__buttons_modify" onClick={handleModify}>
          수정하기
        </p>
        <p>&nbsp;|&nbsp;</p>
        <p className="card__buttons_delete" onClick={handleDelete}>
          삭제하기
        </p>
      </div>
    </CommentCardWrapper>
  );
};

export default CommentHistoryCard;
