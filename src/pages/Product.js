import React, { useState } from "react";
import Styled from "styled-components";

const ProductWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      padding: 8px;
      width: 150px;
      border: none;
      background-color: var(--primary-color);
      color: #fff;
      cursor: pointer;
    }

    .modal__bg {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal {
      position: relative;
      background-color: #fff;
      width: 60%;
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      border-radius: 0.5rem;
    }

    .modal__exit-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }

    .modal__message-btn{
      width: 150px;
    }

    .page-title{
      margin-top: 28px;
      font-weight: bold;
      font-size: 28px;
    }

    .product {
      margin-top: 40px;
      width: 800px;
      height: 540px;
      background-color: var(--theme-color);
      display: flex;
      position: relative;
    }
    
    .product__img{
      width: 260px;
      height: 260px;
      background-color: lightgrey;
      margin: 70px;
    }

    .product__btn{
      color: var(--primary-color);
      font-weight: bold;
      cursor: pointer;
    }
    
    .product__btn--edit{
      position: absolute;
      right: 120px;
      top: 36px;
    }

    .product__btn--delete{
      position: absolute;
      right: 40px;
      top: 36px;
    }

    .product__info{
      margin-top: 40px;
      width: 360px;
      height: 380px;
      font-size: 20px;
    }

    .product__info_date{
      font-size: 16px;
      margin-bottom: 18px;
    }

    .product__info_title, 
    .product__info_category{
      font-weight: bold;
    }

    .product__info_publisher,
    .product__info_deal{
      margin-bottom: 15px;
    }

    .product__btn--buy {
      width: 80px;
      position: absolute;
      bottom: 40px;
      right: 60px;
    }
`;

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyClick = () => {
    setIsModalOpen(true);
  };

  const handleExitClick = () => {
    setIsModalOpen(false);
  };

  return (
    <ProductWrapper>
      {isModalOpen ? (
        <div className="modal__bg">
          <div className="modal">
            <h1>구매신청이 완료되었습니다</h1>
            <button className="modal__message-btn">판매자와 쪽지하기</button>
            <div onClick={handleExitClick} className="modal__exit-btn">
              X
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="page-title">상품 정보</div>
          <div className="product">
            <div className="product__img"></div>
            <div className="product__btn">
              <div className="product__btn--edit">수정하기</div>
              <div className="product__btn--delete">삭제하기</div>
            </div>
            <div className="product__info">
              <p className="product__info_date">작성일자</p>
              <p className="product__info_category">[카테고리]</p>
              <p className="product__info_title">도서명</p>
              <p className="product__info_author">저자</p>
              <p className="product__info_publisher">출판사, 출판일</p>
              <p className="product__info_seller">판매자 ID</p>
              <p className="product__info_price">정가정보</p>
              <p className="product__info_deal">거래상태: 판매중</p>
              <p className="product__info_detail">
                상품설명: 상품설명상품설명상품설명
              </p>
            </div>
            <button onClick={handleBuyClick} className="product__btn--buy">
              구매하기
            </button>
          </div>
        </>
      )}
    </ProductWrapper>
  );
};

export default Product;
