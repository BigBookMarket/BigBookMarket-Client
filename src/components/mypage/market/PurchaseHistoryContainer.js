import React, { useEffect } from "react";
import PurchaseHistoryCard from "./PurchaseHistoryCard";
import connectStore from "../../../hoc/connectStore";

const PurchaseHistoryContainer = ({ user: { userHistory }, actions }) => {
  const { myBuys } = userHistory.myDeals;
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    actions.showBuyHistory(userId);
  }, []);

  return myBuys?.map((item) => (
    <PurchaseHistoryCard key={item.itemId} item={item} />
  ));
};

export default connectStore(PurchaseHistoryContainer);
