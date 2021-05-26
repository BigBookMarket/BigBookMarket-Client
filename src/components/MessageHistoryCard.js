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

.card__info{
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 50px;
}

.card_msg_date{
  color: #3C64B1;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  right: 50px;
  top: 20px;
}

.card__msg_info{
  color: #3C64B1;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 25px;
}

.card__msg_title{
    font-weight: bold;
    margin-bottom: 10px;
}

.card__msg_content{
    margin-right: 80px;
    overflow: hidden;
    word-break:break-all;
}

.reply-btn{
  position: absolute;
  right: 40px;
  bottom: 20px;
}

button{
  border: none;
  padding: 9px;
  background-color: #3c64b1;
  color: white;
  cursor: pointer;
}
`;

const MessageHistoryCard = () => {
  return (
    <MessageCardWrapper>
      <div className="card__info">
        <p className="card__msg_info">
          [카테고리] 도서명 | 저자 | 출판사, 출판일
        </p>
        <p className="card__msg_title">수신자/발신자 ID</p>
        <p className="card__msg_content">
          쪽지
          내용~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        </p>
      </div>
      <div className="card_msg_date">작성일자</div>
      <button className="reply-btn">답장하기</button>
    </MessageCardWrapper>
  );
};

export default MessageHistoryCard;