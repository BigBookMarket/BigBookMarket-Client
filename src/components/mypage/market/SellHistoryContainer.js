import React, { useEffect, useState } from "react";
import { getSellHistory } from "../../../lib/api/user";
import SellHistoryCard from "./SellHistoryCard";

const SellHistoryContainer = () => {
  const [sellHisory, setSellHistory] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    (async () => {
      const data = await getSellHistory(userId);
      setSellHistory(data);
      console.log(data);
    })();
  }, []);

  return sellHisory.map((product) => (
    <SellHistoryCard key={product.itemId} product={product} />
  ));
};

export default SellHistoryContainer;
