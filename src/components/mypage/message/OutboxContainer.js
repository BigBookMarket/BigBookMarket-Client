import React, { useState, useEffect } from "react";
import { getOutboxMessage } from "../../../lib/api/user";
import MessageHistoryCard from "./MessageHistoryCard";

const OutboxContainer = () => {
  const userId = localStorage.getItem("userId");
  const [outboxMessages, setOutboxMessages] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getOutboxMessage(userId);
      setOutboxMessages(data);
    })();
  }, []);
  return outboxMessages.map((message) => (
    <MessageHistoryCard
      key={message.messageId}
      message={message}
      nickname={message.receiverNickname}
    />
  ));
};

export default OutboxContainer;
