import React, { useState, useEffect } from "react";
import { getInboxMessage } from "../../../lib/api/user";
import MessageHistoryCard from "./MessageHistoryCard";

const InboxContainer = ({ receiveClicked }) => {
  const userId = localStorage.getItem("userId");
  const [inboxMessages, setInboxMessages] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getInboxMessage(userId);
      setInboxMessages(data);
    })();
  }, []);

  return inboxMessages.map((message) => (
    <MessageHistoryCard
      key={message.messageId}
      message={message}
      nickname={message.senderNickname}
      receiveClicked={receiveClicked}
    />
  ));
};

export default InboxContainer;
