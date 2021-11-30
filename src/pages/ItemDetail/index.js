import React, { useEffect } from "react";
import { Navbar, Modal } from "../../components";
import { Wrapper } from "./style";
import connectStore from "../../hoc/connectStore";
import { useParams } from "react-router";

const ItemDetail = ({ items: { item }, actions }) => {
  const params = useParams();
  const itemId = params.itemId;
  const buyerId = localStorage.getItem("userId");

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

  const handleBuyClick = () => {
    actions.dealItem(itemId, buyerId);
  };

  useEffect(() => {
    actions.showItemDetail(itemId);
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper isSold={item.status === "SOLD"}>
        <div className="page-title">상품 정보</div>
        <div className="product">
          <img className="product__img" src={item.book.image} alt="" />
          <div className="product__info">
            <p className="product__info_date">작성일 {item.createdDate}</p>
            <p className="product__info_category">[{item.book.category}]</p>
            <p className="product__info_title">{item.book.title}</p>
            <p className="product__info_author">{item.book.author}</p>
            <p className="product__info_publisher">
              {item.book.publisher}, {item.book.pubDate}
            </p>
            <p className="product__info_seller">
              <span>판매자</span> {item.sellerNickname}님
            </p>
            <p className="product__info_price">
              <span>정가</span> {item.book.priceStandard} 원 <br />
              <span>판매가</span> {item.price} 원
            </p>
            <p className="product__info_method">
              <span>거래방법</span> {showMethod()}
            </p>
            <p className="product__info_status">
              <span>거래상태</span> {showStatus()}
            </p>
            <p className="product__info_detail">
              <span>상품설명</span>
              <br />
              <div>{item.detail}</div>
            </p>
          </div>
          {item.status === "SOLD" || item.sellerId === item.buyerId ? null : (
            <button onClick={handleBuyClick} className="product__btn--buy">
              구매하기
            </button>
          )}
        </div>
      </Wrapper>
      <Modal />
    </>
  );
};

export default connectStore(ItemDetail);
