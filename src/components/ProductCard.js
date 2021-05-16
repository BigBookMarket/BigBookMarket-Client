import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

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
    width: 180px;
    height: 200px;
    background-color: lightgrey;
    position: absolute;
    left: 50px;
  }

  .product__info{
    display: flex;
    flex-direction: column;
    width: 480px;
    position: absolute;
    right: 110px;
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

  .product__info_price span:first-child{
    text-decoration: line-through;
  }
`;

//판매자 ID ?
const ProductCard = ({ product }) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "inherit" }}
      to={{
        pathname: `/product/${product.itemId}`,
        state: {
          productinfo: product,
        },
      }}
    >
      <ProductWrapper>
        <img className="product__img" src={product.book.image} alt="" />
        <div className="product__info">
          <p className="product__info_title">
            [{product.book.category}] {product.book.title}
          </p>
          <p className="product__info_author">{product.book.author}</p>
          <p className="product__info_publisher">
            {product.book.publisher}, {product.book.pubDate}
          </p>
          <p className="product__info_price">
            <span>{product.book.priceStandard}원</span>
            <span> &gt; {product.price}원</span>
          </p>
          <p className="product__info_method">거래방법: {product.method}</p>
          <p className="product__info_status">거래상태: {product.status}</p>
          <p className="product__info_date">작성일: {product.createdDate}</p>
        </div>
        <div className="product__seller">{product.userId}</div>
      </ProductWrapper>
    </Link>
  );
};

export default ProductCard;
