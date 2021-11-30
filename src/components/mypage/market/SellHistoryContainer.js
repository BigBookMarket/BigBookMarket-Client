import React, { useEffect } from "react";
import SellHistoryCard from "./SellHistoryCard";
import connectStore from "../../../hoc/connectStore";

const SellHistoryContainer = ({ user: { userHistory }, actions }) => {
  const { mySells } = userHistory.myDeals;
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    actions.showSellHistory(userId);
  }, []);

  return mySells?.map((item) => (
    <SellHistoryCard key={item.itemId} item={item} />
  ));
};

export default connectStore(SellHistoryContainer);
