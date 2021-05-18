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

.commentHistory__info{
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 50px;
}

.commentHistory_card_info{
  color: #3C64B1;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  right: 50px;
  top: 20px;
}

.commentHistory__product_info{
  color: #3C64B1;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 25px;
}

.commentHistory__comment_title{
    font-weight: bold;
    margin-bottom: 10px;
}

.commentHistory__comment_content{
    overflow: hidden;
    word-break:break-all;
}
`;

const CommentHistoryCard = () => {
  return (
    <CommentCardWrapper>
      <div className="commentHistory__info">
        <p className="commentHistory__product_info">[카테고리] 도서명</p>
        <p className="commentHistory__comment_title">[카테고리] 게시글 제목</p>
        <p className="commentHistory__comment_content">
          댓글
          내용~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        </p>
      </div>
      <div className="commentHistory_card_info">작성일자 | 댓글 수 0</div>
    </CommentCardWrapper>
  );
};

export default CommentHistoryCard;
