import React from "react";
import Styled from "styled-components";
import connectStore from "../../../hoc/connectStore";
import { cancelPurchase } from "../../../lib/api/item";

const SellCardWrapper = Styled.div`
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

.card__buttons{
  display: flex;
  color: ${({ theme }) => theme.colors.dark_blue};
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  right: 46px;
  top: 20px;

  & > p:nth-child(2n+1) {
    cursor: pointer;
  }
}

button{
  border: none;
  padding: 9px;
  background-color: ${({ theme }) => theme.colors.dark_blue};
  color: white;
  cursor: pointer;
  height: 36px;
}

.card__cancel-btn{
    position: absolute;
    right: 40px;
    bottom: 20px;
    padding: 0 9px;
}
`;
const SellHistoryCard = ({ actions, item }) => {
  const userId = localStorage.getItem("userId");
  const showStatus = () => {
    switch (item.status) {
      case "SALE":
        return "판매중";
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
  const handleModify = () => {};

  const handleDelete = () => {
    actions.deleteItem(item.itemId);
  };

  const handleCancel = async () => {
    await cancelPurchase(item.itemId, userId);
  };

  return (
    <SellCardWrapper>
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
      <div className="card__buttons">
        {item.status !== "SOLD" ? (
          <>
            <p className="card__buttons_modify" onClick={handleModify}>
              수정하기
            </p>
            <p>&nbsp;|&nbsp;</p>
            <p className="card__buttons_delete" onClick={handleDelete}>
              삭제하기
            </p>
          </>
        ) : null}
      </div>
      {item.status === "DEAL" ? (
        <div>
          <button onClick={handleCancel} className="card__cancel-btn">
            판매중 전환
          </button>
        </div>
      ) : null}
    </SellCardWrapper>
  );
};

export default connectStore(SellHistoryCard);
