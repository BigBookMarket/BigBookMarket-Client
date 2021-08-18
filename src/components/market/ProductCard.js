import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const ProductWrapper = Styled.div`
  width: 850px;
  height: 250px;
  background-color: ${(props) =>
    props.isSold ? "#DDDDDD" : "var(--theme-color)"};
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: ${(props) => (props.isSold ? "default" : "pointer")};

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

    &_created-date{
      color: var(--primary-color);
    }
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

const ProductCard = ({ product }) => {
  const showStatus = () => {
    switch (product.status) {
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
    switch (product.method) {
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
      <ProductWrapper isSold={product.status === "SOLD"}>
        <img className="product__img" src={product.book.image} alt="" />
        <div className="product__info">
          <p className="product__info_created-date">
            작성일: {product.createdDate}
          </p>
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
          <p className="product__info_method">거래방법: {showMethod()}</p>
          <p className="product__info_status">거래상태: {showStatus()}</p>
          <p className="product__info_date">
            판매자: {product.sellerNickname}님
          </p>
        </div>
        <div className="product__seller">{product.userId}</div>
      </ProductWrapper>
    </Link>
  );
};

export default ProductCard;
