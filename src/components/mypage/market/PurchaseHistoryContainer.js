import React, { useEffect, useState } from "react";
import { getPurchaseHistory } from "../../../lib/api/user";
import PurchaseHistoryCard from "./PurchaseHistoryCard";

const PurchaseHistoryContainer = () => {
  const [purchaseHisory, setPurchaseHistory] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    (async () => {
      const data = await getPurchaseHistory(userId);
      setPurchaseHistory(data);
      console.log(data);
    })();
  }, []);

  return purchaseHisory.map((product) => (
    <PurchaseHistoryCard key={product.itemId} product={product} />
  ));
};

export default PurchaseHistoryContainer;
