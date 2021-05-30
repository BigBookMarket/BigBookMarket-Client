import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import Navbar from "../components/Navbar";
import { getProductInfo, dealPurchase } from "../lib/api/item";

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
      height: 520px;
      background-color: var(--theme-color);
      position: relative;
    }
    
    .product__img{
      width: 300px;
      height: 300px;
      background-color: lightgrey;
      position: absolute;
      left: 50px;
      top: 80px;
    }

    .product__btn{
      color: var(--primary-color);
      font-weight: bold;
      cursor: pointer;
    }

    .product__info{
      width: 430px;
      height: 380px;
      font-size: 18px;
      position: absolute;
      right: 0;
      top: 50px;

      &_date {
        font-size: 14px;
        margin-bottom: 18px;
      }

      &_title, &_category {
        font-weight: bold; 
      }

      &_author{
        font-size: 16px;
      }

      &_publisher{
        margin-bottom: 15px;
        font-size: 16px;
      } 
      
      &_status{
        margin-bottom: 15px;
      }

    }

    .product__btn--buy {
      width: 80px;
      position: absolute;
      bottom: 40px;
      right: 60px;
    }
`;

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
    sellerId: "",
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
      },
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
        sellerId: data.sellerId,
      });
    })();
  }, []);

  return (
    <>
      <Navbar />
      <ProductWrapper>
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
                  작성일: {product.createdDate}
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
                  판매자: {product.sellerNickname}님
                </p>
                <p className="product__info_price">
                  정가: {product.book.priceStandard} 원 <br />
                  판매가: {product.price} 원
                </p>
                <p className="product__info_method">거래방법: {showMethod()}</p>
                <p className="product__info_status">거래상태: {showStatus()}</p>
                <p className="product__info_detail">
                  상품설명:
                  <br />
                  {product.detail}
                </p>
              </div>
              {product.status === "SOLD" ? null : (
                <button onClick={handleBuyClick} className="product__btn--buy">
                  구매하기
                </button>
              )}
            </div>
          </>
        )}
      </ProductWrapper>
    </>
  );
};

export default Product;
