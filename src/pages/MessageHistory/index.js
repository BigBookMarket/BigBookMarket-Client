import React, { useState } from "react";
import InboxContainer from "../../components/mypage/message/InboxContainer";
import { Navbar } from "../../components";
import OutboxContainer from "../../components/mypage/message/OutboxContainer";
import { Wrapper } from "./style";

const MessageHistory = () => {
  const [receiveClicked, setReceiveClicked] = useState(true);
  const [sendClicked, setSendClicked] = useState(false);

  const handleReceiveSwitch = () => {
    setSendClicked(false);
    setReceiveClicked(true);
  };

  const handleSendSwitch = () => {
    setReceiveClicked(false);
    setSendClicked(true);
  };

  return (
    <>
      <Navbar />
      <Wrapper>
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
        {receiveClicked ? (
          <InboxContainer receiveClicked={receiveClicked} />
        ) : (
          <OutboxContainer receiveClicked={receiveClicked} />
        )}
      </Wrapper>
    </>
  );
};

export default MessageHistory;
