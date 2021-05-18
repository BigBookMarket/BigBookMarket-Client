import React from "react";
import Styled from "styled-components";

const MessageCardWrapper = Styled.div`
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

const MessageHistoryCard = () => {
  return (
    <MessageCardWrapper>
      <div className="commentHistory__info">
        <p className="commentHistory__product_info">
          [카테고리] 도서명 | 저자 | 출판사, 출판일
        </p>
        <p className="commentHistory__comment_title">수신자/발신자 ID</p>
        <p className="commentHistory__comment_content">
          쪽지
          내용~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        </p>
      </div>
      <div className="commentHistory_card_info">작성일자</div>
    </MessageCardWrapper>
  );
};

export default MessageHistoryCard;
