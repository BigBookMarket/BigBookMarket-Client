import React from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const ProductWrapper = Styled.div`
  width: 850px;
  height: 216px;
  background-color: var(--theme-color);
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  .product__img{
    width: 176px;
    height: 176px;
    background-color: lightgrey;
    position: absolute;
    left: 50px;
  }

  .product__info{
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 400px;
  }

  .product__info_title{
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .product__seller{
    position: absolute;
    right: 40px;
    top: 20px;
  }
`;

const ProductCard = ({ history }) => {
  return (
    <ProductWrapper onClick={() => history.push('/product')}>
      <div className="product__img"></div>
      <div className="product__info">
        <p className="product__info_title">[카테고리] 도서명</p>
        <p className="product__info_author">저자</p>
        <p className="product__info_publisher">출판사, 출판일</p>
        <p className="product__info_price">정가정보</p>
        <p className="product__info_method">거래방법: 택배</p>
        <p className="product__info_status">거래상태: 판매중</p>
        <p className="product__info_date">작성일자</p>
      </div>
      <div className="product__seller">판매자 ID</div>
    </ProductWrapper>
  );
};

export default withRouter(ProductCard);
