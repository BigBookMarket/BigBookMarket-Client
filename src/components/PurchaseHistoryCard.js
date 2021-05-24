import React from "react";
import Styled from "styled-components";

const PurchaseCardWrapper = Styled.div`
width: 850px;
height: 216px;
background-color: var(--theme-color);
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
  display: flex;
  flex-direction: column;
  text-align: left;
  position: absolute;
  right: 400px;
  color: #737B7D;
}

.card__info_date{
  font-size: 13px;
  margin-bottom: 5px;
}

.card_modify_btn{
  display: flex;
  color: #3C64B1;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  right: 40px;
  top: 20px;
}

button{
  border: none;
  padding: 9px;
  background-color: #3c64b1;
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
const PurchaseHistoryCard = () => {
  return (
    <PurchaseCardWrapper>
      <div className="card__img"></div>
      <div className="card__info">
        <p className="card__info_date">작성일자</p>
        <p className="card__info_title">[카테고리] 도서명 / 저자</p>
        <p className="card__info_publisher">출판사, 출판일</p>
        <p className="card__info_listprice">정가정보</p>
        <p className="card__info_price">판매가</p>
        <p className="card__info_method">거래방법</p>
        <p className="card__info_status">거래상태</p>
        <p className="card__info_seller">판매자ID</p>
      </div>
      <div className="card_modify_btn">
        <p className="btn">쪽지하기</p>
      </div>
      <button className="purchase_completed_btn">구매완료</button>
      <button className="purchase_cancel_btn">구매취소</button>
    </PurchaseCardWrapper>
  );
};

export default PurchaseHistoryCard;
