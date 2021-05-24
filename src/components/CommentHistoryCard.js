import React from "react";
import Styled from "styled-components";

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
  top: 20px;
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
`;

const CommentHistoryCard = () => {
  return (
    <CommentCardWrapper>
      <div className="card__info">
        <p className="card__product_info">[카테고리] 도서명</p>
        <p className="card__comment_title">[카테고리] 게시글 제목</p>
        <p className="card__comment_content">
          댓글
          내용~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        </p>
      </div>
      <div className="card_info">작성일자 | 댓글 수 0</div>
    </CommentCardWrapper>
  );
};

export default CommentHistoryCard;
