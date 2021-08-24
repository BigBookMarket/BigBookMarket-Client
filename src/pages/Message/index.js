import React, { useState } from "react";
import { Navbar } from "../../components";
import { writeMessage } from "../../lib/api/message";
import { Wrapper } from "./style";

const Message = ({ history, location }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookInfo, setBookInfo] = useState(location.state.product.book.title);
  const [receiverNickname, setReceiverNickname] = useState(
    location.state.fromHistory
      ? location.state.product.senderNickname
      : location.state.product.sellerNickname
  );
  const [newReceiverId, setNewReceiverId] = useState(
    location.state.fromHistory
      ? location.state.product.senderId
      : location.state.product.sellerId
  );

  const [message, setMessage] = useState({
    itemId: location.state.itemId,
    content: "",
    senderId: localStorage.getItem("userId"),
    receiverId: newReceiverId
  });

  const { itemId, content, senderId, receiverId } = message;

  const handleMessageSubmit = async (e) => {
    setIsModalOpen(true);
    e.preventDefault();
    await writeMessage(message);
  };

  const handleConfirmClick = () => {
    history.push("/market");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value
    });
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="page-title">쪽지 보내기</div>
        {isModalOpen ? (
          <div className="modal__bg">
            <div className="modal">
              <h1>쪽지가 전송되었습니다</h1>
              <button
                onClick={handleConfirmClick}
                className="modal__message-btn"
              >
                확인
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleMessageSubmit} className="message__form">
            <div className="message__header">
              <input
                name="sellerId"
                className="message__seller-id"
                value={`수신자: ${receiverNickname}님`}
                onChange={handleInputChange}
                readOnly
              />
              <input
                name="bookInfo"
                className="message__book-info"
                placeholder="도서정보"
                value={bookInfo}
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
        )}
      </Wrapper>
    </>
  );
};

export default Message;
