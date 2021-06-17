import React, { useState } from "react";
import Styled from "styled-components";
import Navbar from "../components/Navbar";
import { writeMessage } from "../lib/api/message";

const MessageWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;

  .page-title{
    font-weight: bold;
    font-size: 28px;
  }

  button {
    border: none;
    padding: 10px;
    width: 80px;
    height: 40px;
    background-color: var(--primary-color);
    color: #fff;
    cursor: pointer;
  }

  .modal__bg {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal {
      position: relative;
      background-color: #fff;
      width: 60%;
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      border-radius: 0.5rem;
    }

    .modal__exit-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }

    .modal__message-btn{
      width: 150px;
    }

  .message__form {
    margin-top: 28px;
    width: 900px;
    height: 540px;
    background-color: var(--theme-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  form input {
    padding: 10px;
    width: 350px;
    height: 42px;
    border: none;
  }

  .message__header {
    display: flex;
    justify-content: space-between;
    width: 800px;
  }

  textarea.message__content {
    margin-top: 16px;
    width: 800px;
    height: 350px;
    padding: 10px;
    resize: none;
    border: none;
  }

  .message__form button {
    position: absolute;
    right: 50px;
    bottom: 16px;
  }
`;

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
    receiverId: newReceiverId,
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
      [name]: value,
    });
  };

  return (
    <>
      <Navbar />
      <MessageWrapper>
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
      </MessageWrapper>
    </>
  );
};

export default Message;
