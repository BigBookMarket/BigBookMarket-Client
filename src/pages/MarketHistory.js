import React from "react";
import Styled from "styled-components";
import PurchaseHistoryCard from "../components/PurchaseHistoryCard";
import SalesHistoryCard from "../components/SalesHistoryCard";

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

  input {display: none;}

  input:checked + label:before {
      -webkit-transform: translateX(52px);
      -ms-transform: translateX(52px);
      transform: translateX(52px);
  }

  label{
      display: inline-block;
      width: 110px;
      height: 44px;
      cursor: pointer;
      position: relative;
  }

  label::before {
      content: '';
      display: block;
      width: 50px;
      height: 36px;
      left: 4px;
      bottom: 4px;
      position: absolute;
      background-color: #3C64B1;
      transition: all .4s ease;
  }

  .switch_wrapper{
      position: relative;
      left: 400px;
      margin: 40px;
  }

  .switch_sell {
      font-size: 14px;
      font-weight: bold;
      position: absolute;
      top: 12px;
      left: 15px;
  }
  
  .switch_buy {
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    top: 12px;
    right: 15px;
}
`;

const MarketHistory = () => {
  return (
    <MarketHistoryWrapper>
      <p className="title">거래 내역</p>
      <div class="switch_wrapper">
        <input type="checkbox" id="switch"></input>
        <label for="switch"></label>
        <p className="switch_sell">판매</p>
        <p className="switch_buy">구매</p>
      </div>
      <PurchaseHistoryCard />
      <SalesHistoryCard />
    </MarketHistoryWrapper>
  );
};

export default MarketHistory;
