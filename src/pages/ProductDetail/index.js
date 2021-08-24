import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import { getProductInfo, dealPurchase } from "../../lib/api/item";
import { Wrapper } from "./style";

const Product = ({ history, location }) => {
  const itemId = location.state.productinfo.itemId;
  const buyerId = localStorage.getItem("userId");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState({
    book: [],
    createdDate: "",
    detail: "",
    method: "",
    price: 0,
    status: "",
    sellerNickname: "",
    sellerId: ""
  });

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

  const handleBuyClick = async () => {
    await dealPurchase(itemId, buyerId);
    setIsModalOpen(true);
  };

  const handleExitClick = () => {
    setIsModalOpen(false);
  };

  const handleMessageClick = () => {
    history.push({
      pathname: "/message",
      state: {
        product: product,
        itemId: itemId,
        fromHistory: false
      }
    });
  };

  useEffect(() => {
    (async () => {
      const data = await getProductInfo(itemId);
      setProduct({
        book: data.book,
        createdDate: data.createdDate,
        detail: data.detail,
        method: data.method,
        price: data.price,
        status: data.status,
        sellerNickname: data.sellerNickname,
        sellerId: data.sellerId
      });
    })();
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper isSold={product.status === "SOLD"}>
        {isModalOpen ? (
          <div className="modal__bg">
            <div className="modal">
              <h1>구매신청이 완료되었습니다</h1>
              <button
                onClick={handleMessageClick}
                className="modal__message-btn"
              >
                판매자와 쪽지하기
              </button>
              <div onClick={handleExitClick} className="modal__exit-btn">
                X
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="page-title">상품 정보</div>
            <div className="product">
              <img className="product__img" src={product.book.image} alt="" />
              <div className="product__info">
                <p className="product__info_date">
                  작성일 {product.createdDate}
                </p>
                <p className="product__info_category">
                  [{product.book.category}]
                </p>
                <p className="product__info_title">{product.book.title}</p>
                <p className="product__info_author">{product.book.author}</p>
                <p className="product__info_publisher">
                  {product.book.publisher}, {product.book.pubDate}
                </p>
                <p className="product__info_seller">
                  <span>판매자</span> {product.sellerNickname}님
                </p>
                <p className="product__info_price">
                  <span>정가</span> {product.book.priceStandard} 원 <br />
                  <span>판매가</span> {product.price} 원
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
                  <div>{product.detail}</div>
                </p>
              </div>
              {product.status === "SOLD" ||
              product.sellerId === buyerId ? null : (
                <button onClick={handleBuyClick} className="product__btn--buy">
                  구매하기
                </button>
              )}
            </div>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Product;
