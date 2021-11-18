import React from "react";
import Styled from "styled-components";
import connectStore from "../../../hoc/connectStore";

const PurchaseCardWrapper = Styled.div`
width: 850px;
height: 216px;
background-color: ${({ theme }) => theme.colors.light_blue};
margin-bottom: 30px;
display: flex;
align-items: center;
position: relative;

.card__img{
  width: 176px;
  height: 176px;
  background-color: lightgrey;
  position: absolute;
  left: 50px;
}

.card__info{
  width: 550px;
  display: flex;
  flex-direction: column;
  text-align: left;
  position: absolute;
  right: 50px;
  color: #737B7D;
}

.card__info_date{
  font-size: 13px;
  margin-bottom: 5px;
}

.card_modify_btn{
  display: flex;
  color: ${({ theme }) => theme.colors.dark_blue};
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  right: 40px;
  top: 20px;
}

button{
  border: none;
  padding: 9px;
  background-color: ${({ theme }) => theme.colors.dark_blue};
  color: white;
  cursor: pointer;
}

.purchase_completed_btn{
    position: absolute;
    right: 40px;
    bottom: 20px;
}

.purchase_cancel_btn{
    position: absolute;
    right: 123px;
    bottom: 20px;
}

.btn{
  cursor: pointer;
}
`;
const PurchaseHistoryCard = ({ actions, item }) => {
  const userId = localStorage.getItem("userId");
  const showStatus = () => {
    switch (item.status) {
      case "DEAL":
        return "거래중";
      case "SOLD":
        return "판매완료";
      default:
        return;
    }
  };
  const showMethod = () => {
    switch (item.method) {
      case "DELIVERY":
        return "택배";
      case "DIRECT":
        return "직거래";
      case "BOTH":
        return "택배,직거래";
      default:
        return;
    }
  };

  const handleCancel = async () => {
    actions.cancelItem(item.itemId, userId);
  };

  const handleComplete = async () => {
    actions.buyItem(item.itemId);
  };
  return (
    <PurchaseCardWrapper>
      <img className="card__img" src={item.book.image} alt="" />
      <div className="card__info">
        <p className="card__info_date">{item.createdDate}</p>
        <p className="card__info_title">
          [{item.book.category}] {item.book.title}
        </p>
        <p className="card__info_publisher">
          {item.book.author} / {item.book.publisher}
        </p>
        <p className="card__info_listprice">
          정가: {item.book.priceStandard}원
        </p>
        <p className="card__info_price">판매가: {item.price}원</p>
        <p className="card__info_method">거래방법: {showMethod()}</p>
        <p className="card__info_status">거래상태: {showStatus()}</p>
      </div>
      {item.status === "SOLD" ? null : (
        <div>
          <div className="card_modify_btn">
            <p className="btn">쪽지하기</p>
          </div>
          <button onClick={handleComplete} className="purchase_completed_btn">
            구매완료
          </button>
          <button onClick={handleCancel} className="purchase_cancel_btn">
            구매취소
          </button>
        </div>
      )}
    </PurchaseCardWrapper>
  );
};

export default connectStore(PurchaseHistoryCard);
