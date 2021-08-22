import React, { useEffect, useState } from "react";
import { Sidebar } from "../../components";
import Styled from "styled-components";
import { ProductCard } from "../../components";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../../components";

const MarketWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 280px;
  position: relative;

  .product-search{
    margin: 40px 0;
    display: flex;
    position: relative;
    width: 800px;
    justify-content: center;
    align-items: center;
  }

  .product-search input{
    padding: 10px;
    width: 280px;
    height: 42px;
    border: none;
    background-color: ${({ theme }) => theme.colors.light_blue};
  }

  button {
    border: none;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.dark_blue};
    color: #fff;
    cursor: pointer;
  }

  .search-btn {
    width: 64px;
    margin-left: 20px;
  }

  .sell-btn {
    width: 80px;
    position: absolute;
    right: 0;
  }
`;

const getProductList = async () => {
  try {
    const data = await axios.get("https://bigbookmarket.kro.kr/item/list");
    console.log("[SUCCESS] GET product list data", data.data);
    return data.data;
  } catch (e) {
    console.log("[FAIL] GET product list data");
    return null;
  }
};

const Market = ({ history }) => {
  const [searchInput, setSearchInput] = useState("");
  const [productList, setProductList] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      const products = await getProductList();
      const searchedProducts = products.filter((product) =>
        product.book.title.includes(searchInput)
      );
      setProductList(searchedProducts);
    })();
    setSearchInput("");
  };

  useEffect(() => {
    (async () => {
      const data = await getProductList();
      setProductList(data);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar setProductList={setProductList} />
      <MarketWrapper>
        <div className="product-search">
          <form onSubmit={handleSubmit}>
            <input
              value={searchInput}
              onChange={handleChange}
              placeholder="도서 검색"
            ></input>
            <button className="search-btn">검색</button>
          </form>
          <button className="sell-btn" onClick={() => history.push("/sell")}>
            판매하기
          </button>
        </div>
        {productList.map((product) => {
          return <ProductCard key={product.itemId} product={product} />;
        })}
      </MarketWrapper>
    </>
  );
};

export default withRouter(Market);