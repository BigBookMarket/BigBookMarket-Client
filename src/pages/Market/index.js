import React, { useEffect, useState } from "react";
import { Sidebar } from "../../components";
import { ItemCard } from "../../components";
import history from "../../utils/history";
import { Navbar } from "../../components";
import { Wrapper } from "./style";
import connectStore from "../../hoc/connectStore";

const Market = ({ items: { items }, actions }) => {
  const { currentItemList } = items;
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.filterItems(searchInput);
    setSearchInput("");
  };

  useEffect(() => {
    actions.showItems("");
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
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
        {currentItemList?.map((item) => {
          return <ItemCard key={item.itemId} item={item} />;
        })}
      </Wrapper>
    </>
  );
};

export default connectStore(Market);
