import React, { useState } from "react";
import { Modal, Navbar } from "../../components";
import { Wrapper } from "./style";
import connectStore from "../../hoc/connectStore";
import history from "../../utils/history";

const Message = ({ actions }) => {
  const userId = localStorage.getItem("userId");
  const { path, message } = history.location.state;
  const [content, setContent] = useState("");

  const getReceiver = () => {
    switch (path) {
      case "message_history":
        return {
          nickname: message.senderNickname,
          id: message.senderId
        };

      case "buy_history":
      case "market":
        return {
          nickname: message.sellerNickname,
          id: message.sellerId
        };

      default:
        break;
    }
  };

  const receiver = getReceiver();

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const messageData = {
      itemId: message.itemId,
      content,
      senderId: userId,
      receiverId: receiver.id
    };
    actions.sendMessage(messageData);
  };

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="page-title">쪽지 보내기</div>

        <form onSubmit={handleMessageSubmit} className="message__form">
          <div className="message__header">
            <input
              name="sellerId"
              className="message__seller-id"
              value={`수신자: ${receiver.nickname}님`}
              onChange={handleInputChange}
              readOnly
            />
            <input
              name="bookInfo"
              className="message__book-info"
              placeholder="도서정보"
              value={message.book.title}
              onChange={handleInputChange}
              readOnly
            />
          </div>
          <textarea
            name="content"
            className="message__content"
            value={content}
            onChange={handleInputChange}
          />
          <button type="submit">보내기</button>
        </form>
      </Wrapper>
      <Modal />
    </>
  );
};

export default connectStore(Message);
