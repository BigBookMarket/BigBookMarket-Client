import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import axios from "axios";

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
      position: relative;
    }
    
    .product__img{
      width: 300px;
      height: 300px;
      background-color: lightgrey;
      position: absolute;
      left: 30px;
      top: 70px;
    }

    .product__btn{
      color: var(--primary-color);
      font-weight: bold;
      cursor: pointer;
    }

    .product__info{
      margin-top: 40px;
      width: 430px;
      height: 380px;
      font-size: 20px;
      position: absolute;
      right: 15px;
      top: 30px;
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

const Product = ({ history, location }) => {
  const itemId = location.state.productinfo.itemId;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState({
    book: [],
    createdDate: "",
    detail: "",
    method: "",
    price: 0,
    status: "",
    userId: 0,
  });

  const handleBuyClick = () => {
    setIsModalOpen(true);
  };

  const handleExitClick = () => {
    setIsModalOpen(false);
  };

  const handleMessageClick = () => {
    history.push("/message");
  };

  const getProductInfo = async () => {
    try {
      const data = await axios.get(
        `https://bigbookmarket.kro.kr/item/${itemId}`
      );
      console.log("[SUCCESS] GET product data", data.data);
      return data.data;
    } catch (e) {
      console.log("[FAIL] GET product data");
      return null;
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getProductInfo();
      setProduct({
        book: data.book,
        createdDate: data.createdDate,
        detail: data.detail,
        method: data.method,
        price: data.price,
        status: data.status,
        sellerNickname: data.sellerNickname,
      });
    })();
  }, []);

  return (
    <ProductWrapper>
      {isModalOpen ? (
        <div className="modal__bg">
          <div className="modal">
            <h1>구매신청이 완료되었습니다</h1>
            <button onClick={handleMessageClick} className="modal__message-btn">
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
                판매자: {product.sellerNickname}
              </p>
              <p className="product__info_price">
                정가: {product.book.priceStandard} 원 <br />
                판매가: {product.price} 원
              </p>
              <p className="product__info_deal">거래상태: {product.status}</p>
              <p className="product__info_detail">
                상품설명:
                <br />
                {product.detail}
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
