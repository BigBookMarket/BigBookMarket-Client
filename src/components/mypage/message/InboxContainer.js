import React, { useEffect } from "react";
import MessageHistoryCard from "./MessageHistoryCard";
import connectStore from "../../../hoc/connectStore";

const InboxContainer = ({ user: { userHistory }, actions }, receiveClicked) => {
  const { myInbox } = userHistory.myMessages;

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    actions.showInboxHistory(userId);
  }, []);

  return myInbox?.map((message) => (
    <MessageHistoryCard
      key={message.messageId}
      message={message}
      nickname={message.senderNickname}
      receiveClicked={receiveClicked}
    />
  ));
};

export default connectStore(InboxContainer);
