import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const ProductWrapper = Styled.div`
  width: 850px;
  height: 250px;
  background-color: ${(props) => (props.isSold ? "#DDDDDD" : "#EEF2F6")};
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
      color: ${({ theme }) => theme.colors.dark_blue};
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

const ItemCard = ({ item }) => {
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

  return (
    <Link
      style={{ textDecoration: "none", color: "inherit" }}
      to={{
        pathname: `/item/${item.itemId}`,
        state: {
          itemInfo: item
        }
      }}
    >
      <ProductWrapper isSold={item.status === "SOLD"}>
        <img className="product__img" src={item.book.image} alt="" />
        <div className="product__info">
          <p className="product__info_created-date">
            작성일: {item.createdDate}
          </p>
          <p className="product__info_title">
            [{item.book.category}] {item.book.title}
          </p>
          <p className="product__info_author">{item.book.author}</p>
          <p className="product__info_publisher">
            {item.book.publisher}, {item.book.pubDate}
          </p>
          <p className="product__info_price">
            <span>{item.book.priceStandard}원</span>
            <span> &gt; {item.price}원</span>
          </p>
          <p className="product__info_method">거래방법: {showMethod()}</p>
          <p className="product__info_status">거래상태: {showStatus()}</p>
          <p className="product__info_date">판매자: {item.sellerNickname}님</p>
        </div>
        <div className="product__seller">{item.userId}</div>
      </ProductWrapper>
    </Link>
  );
};

export default ItemCard;
