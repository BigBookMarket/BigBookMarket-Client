import React, { useState } from "react";
import SellHistoryContainer from "../../components/mypage/market/SellHistoryContainer";
import PurchaseHistoryContainer from "../../components/mypage/market/PurchaseHistoryContainer";
import { Navbar } from "../../components";
import { Wrapper } from "./style";

const MarketHistory = () => {
  const [sellClicked, setSellClicked] = useState(true);
  const [buyClicked, setBuyClicked] = useState(false);

  const handleSellSwitch = () => {
    setBuyClicked(false);
    setSellClicked(true);
  };

  const handleBuySwitch = () => {
    setSellClicked(false);
    setBuyClicked(true);
  };

  return (
    <>
      <Navbar />
      <Wrapper>
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
        {sellClicked ? <SellHistoryContainer /> : <PurchaseHistoryContainer />}
      </Wrapper>
    </>
  );
};

export default MarketHistory;
