import React from 'react';
import Styled from 'styled-components';

const ProductWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .page-title{
        margin-top: 20px;
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

    .product__btn--buy{
        border: none;
        width: 80px;
        padding: 10px;
        background-color: var(--primary-color);
        color: white;
        position: absolute;
        bottom: 40px;
        right: 60px;
        
        &:hover{
            cursor: pointer;
        }
    }
`;

const Product = () => {
  return (
    <ProductWrapper>
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
            상품설명:
            상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상품설명상
          </p>
        </div>
        <button className="product__btn--buy">구매버튼</button>
      </div>
    </ProductWrapper>
  );
};

export default Product;
