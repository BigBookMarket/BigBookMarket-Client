import React, { useEffect, useState } from "react";
import { Sidebar } from "../../components";
import { ProductCard } from "../../components";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../../components";
import { Wrapper } from "./style";

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
      <Wrapper>
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
      </Wrapper>
    </>
  );
};

export default withRouter(Market);
