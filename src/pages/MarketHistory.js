import React, { useState } from "react";
import Styled from "styled-components";
import PurchaseHistoryCard from "../components/PurchaseHistoryCard";
import SellHistoryCard from "../components/SellHistoryCard";

const MarketHistoryWrapper = Styled.div`
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

  .sell-btn {
      background: none;
      font-size: 14px;
      position: absolute;
      top: 12px;
      left: -130px;
      width: 70px;
      height: 44px;
      cursor: pointer;
  }

  .sell-btn.clicked {
    background: #3C64B1;
    color: white;
  }
  
  .buy-btn {
    background: none;
    font-size: 14px;
    position: absolute;
    top: 12px;
    left: -50px;
    width: 70px;
    height: 44px;
    cursor: pointer;
}

.buy-btn.clicked {
  background: #3C64B1;
  color: white;
}
`;

const MarketHistory = () => {
  const [sellClicked, setSellClicked] = useState(false);
  const [buyClicked, setBuyClicked] = useState(false);

  const handleSellSwitch = (e) => {
    setBuyClicked(false);
    setSellClicked(true);
  };

  const handleBuySwitch = (e) => {
    setSellClicked(false);
    setBuyClicked(true);
  };

  return (
    <MarketHistoryWrapper>
      <p className="title">거래 내역</p>
      <div className="toggle-buttons">
        <button
          className={`sell-btn ${sellClicked ? "clicked" : null}`}
          onClick={handleSellSwitch}
        >
          판매
        </button>
        <button
          className={`buy-btn ${buyClicked ? "clicked" : null}`}
          onClick={handleBuySwitch}
        >
          구매
        </button>
      </div>
      <PurchaseHistoryCard />
      <SellHistoryCard />
    </MarketHistoryWrapper>
  );
};

export default MarketHistory;
