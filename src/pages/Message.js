import React from "react";
import Styled from "styled-components";

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
    border: none;
    padding: 10px;
    width: 80px;
    height: 40px;
    background-color: var(--primary-color);
    color: #fff;
    cursor: pointer;
    position: absolute;
    right: 50px;
    bottom: 16px;
  }
`;

const Message = () => {
  const handleMessageSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <MessageWrapper>
      <div className="page-title">쪽지 보내기</div>
      <form onSubmit={handleMessageSubmit} className="message__form">
        <div className="message__header">
          <input
            name="sellerId"
            className="message__seller-id"
            placeholder="판매자 ID"
          />
          <input
            name="bookInfo"
            className="message__book-info"
            placeholder="도서정보"
          />
        </div>
        <textarea className="message__content" />
        <button>보내기</button>
      </form>
    </MessageWrapper>
  );
};

export default Message;
