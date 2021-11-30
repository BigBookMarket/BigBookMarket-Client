import React from "react";
import Styled from "styled-components";
import connectStore from "../../../hoc/connectStore";

const CommentCardWrapper = Styled.div`
width: 850px;
height: 190px;
background-color: ${({ theme }) => theme.colors.light_blue};;
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
  color: ${({ theme }) => theme.colors.dark_blue};
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  right: 50px;
  top: 36px;
}

.card__product_info{
  color: ${({ theme }) => theme.colors.dark_blue};
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
  color: ${({ theme }) => theme.colors.dark_blue};
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

const CommentHistoryCard = ({ actions, comment }) => {
  const showCategory = () => {
    switch (comment.postCategory) {
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
  const handleModify = () => {};

  const handleDelete = async () => {
    actions.deleteComment(comment.commentId);
  };

  return (
    <CommentCardWrapper>
      <div className="card__info">
        <p className="card__product_info">
          [{comment.bookCategory}] {comment.bookTitle}
        </p>
        <p className="card__comment_title">
          [{showCategory()}] {comment.postTitle}
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

export default connectStore(CommentHistoryCard);
