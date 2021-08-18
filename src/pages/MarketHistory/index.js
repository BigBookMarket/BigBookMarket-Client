import React, { useState } from "react";
import Styled from "styled-components";
import SellHistoryContainer from "../../components/mypage/market/SellHistoryContainer";
import PurchaseHistoryContainer from "../../components/mypage/market/PurchaseHistoryContainer";
import { Navbar } from "../../components";

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
      border: 1px solid ${({ theme }) => theme.colors.dark_blue};
  }

  .sell-btn.clicked {
    background: ${({ theme }) => theme.colors.dark_blue};
    color: white;
    border: none;
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
    border: 1px solid ${({ theme }) => theme.colors.dark_blue};
}

.buy-btn.clicked {
  background: ${({ theme }) => theme.colors.dark_blue};
  color: white;
  border: none;
}
`;

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
        {sellClicked ? <SellHistoryContainer /> : <PurchaseHistoryContainer />}
      </MarketHistoryWrapper>
    </>
  );
};

export default MarketHistory;
