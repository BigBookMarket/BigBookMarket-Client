import React from "react";
import Styled from "styled-components";

const SalesCardWrapper = Styled.div`
width: 850px;
height: 216px;
background-color: var(--theme-color);
margin-bottom: 30px;
display: flex;
align-items: center;
position: relative;

.purchaseHistory__img{
  width: 176px;
  height: 176px;
  background-color: lightgrey;
  position: absolute;
  left: 50px;
}

.purchaseHistory__info{
  display: flex;
  flex-direction: column;
  text-align: left;
  position: absolute;
  right: 400px;
  color: #737B7D;
}

.purchaseHistory__info_date{
  font-size: 13px;
  margin-bottom: 5px;
}

.purchaseHistory_modify_btn{
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

.purchase_sale_btn{
    position: absolute;
    right: 40px;
    bottom: 20px;
    padding: 0 9px;
}

.purchase_cancel_btn{
    position: absolute;
    right: 137px;
    bottom: 20px;
}
`;
const SalesHistoryCard = () => {
  return (
    <SalesCardWrapper>
      <div className="purchaseHistory__img"></div>
      <div className="purchaseHistory__info">
        <p className="purchaseHistory__info_date">작성일자</p>
        <p className="purchaseHistory__info_title">[카테고리] 도서명 / 저자</p>
        <p className="purchaseHistory__info_publisher">출판사, 출판일</p>
        <p className="purchaseHistory__info_listprice">정가정보</p>
        <p className="purchaseHistory__info_price">판매가</p>
        <p className="purchaseHistory__info_method">거래방법</p>
        <p className="purchaseHistory__info_status">거래상태</p>
      </div>
      <div className="purchaseHistory_modify_btn">수정하기 | 삭제하기</div>
      <button className="purchase_sale_btn">
        판매중으로<br></br>전환
      </button>
      <button className="purchase_cancel_btn">판매취소</button>
    </SalesCardWrapper>
  );
};

export default SalesHistoryCard;
