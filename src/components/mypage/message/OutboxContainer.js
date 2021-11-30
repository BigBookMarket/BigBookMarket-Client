import React, { useEffect } from "react";
import MessageHistoryCard from "./MessageHistoryCard";
import connectStore from "../../../hoc/connectStore";

const OutboxContainer = ({ user: { userHistory }, actions }) => {
  const { myOutbox } = userHistory.myMessages;
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    actions.showOutboxHistory(userId);
  }, []);

  return myOutbox?.map((message) => (
    <MessageHistoryCard
      key={message.messageId}
      message={message}
      nickname={message.receiverNickname}
    />
  ));
};

export default connectStore(OutboxContainer);
