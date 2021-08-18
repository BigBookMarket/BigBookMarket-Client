import React from "react";
import Styled from "styled-components";
import { withRouter } from "react-router-dom";

const MessageCardWrapper = Styled.div`
width: 850px;
height: 190px;
background-color: ${({ theme }) => theme.colors.light_blue};
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
  color: ${({ theme }) => theme.colors.dark_blue};
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  right: 50px;
  top: 20px;
}

.card__msg_info{
  color: ${({ theme }) => theme.colors.dark_blue};
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
  background-color: ${({ theme }) => theme.colors.dark_blue};
  color: white;
  cursor: pointer;
}
`;

const MessageHistoryCard = ({ history, message, nickname, receiveClicked }) => {
  const handleReply = () => {
    history.push({
      pathname: "/message",
      state: {
        product: message,
        itemId: message.itemId,
        fromHistory: true
      }
    });
  };
  return (
    <MessageCardWrapper>
      <div className="card__info">
        <p className="card__msg_info">
          [{message.book.category}] {message.book.title} | {message.book.author}{" "}
          | {message.book.publisher}
        </p>
        <p className="card__msg_title">
          {`${receiveClicked ? "발신자: " : "수신자: "} ${nickname}님 `}{" "}
        </p>
        <p className="card__msg_content">{message.content}</p>
      </div>
      <div className="card_msg_date">{message.createdDate}</div>
      {receiveClicked && (
        <button onClick={handleReply} className="reply-btn">
          답장하기
        </button>
      )}
    </MessageCardWrapper>
  );
};

export default withRouter(MessageHistoryCard);
