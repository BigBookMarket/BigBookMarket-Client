import React, { useState } from "react";
import Styled from "styled-components";
import MessageHistoryCard from "../components/MessageHistoryCard";

const MessageHistoryWrapper = Styled.div`
  margin: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  .title{
      font-size: 36px;
      font-weight: bold;
  }

  .toggle-buttons{
    position: relative;
    left: 400px;
    margin: 40px;
    margin-bottom: 80px;
}

  .receive-btn {
    background: none;
    font-size: 14px;
    position: absolute;
    top: 12px;
    left: -130px;
    width: 70px;
    height: 44px;
    cursor: pointer;
}

.receive-btn.clicked {
  background: #3C64B1;
  color: white;
}

.send-btn {
  background: none;
  font-size: 14px;
  position: absolute;
  top: 12px;
  left: -50px;
  width: 70px;
  height: 44px;
  cursor: pointer;
}

.send-btn.clicked {
background: #3C64B1;
color: white;
}
`;

const MessageHistory = () => {
  const [receiveClicked, setReceiveClicked] = useState(false);
  const [sendClicked, setSendClicked] = useState(false);

  const handleReceiveSwitch = (e) => {
    setSendClicked(false);
    setReceiveClicked(true);
  };

  const handleSendSwitch = (e) => {
    setReceiveClicked(false);
    setSendClicked(true);
  };

  return (
    <MessageHistoryWrapper>
      <p className="title">쪽지함</p>
      <div className="toggle-buttons">
        <button
          className={`receive-btn ${receiveClicked ? "clicked" : null}`}
          onClick={handleReceiveSwitch}
        >
          수신함
        </button>
        <button
          className={`send-btn ${sendClicked ? "clicked" : null}`}
          onClick={handleSendSwitch}
        >
          발신함
        </button>
      </div>
      <MessageHistoryCard />
      <MessageHistoryCard />
      <MessageHistoryCard />
    </MessageHistoryWrapper>
  );
};

export default MessageHistory;
