import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import { withRouter } from 'react-router-dom';

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
    background-color: var(--theme-color);
  }

  button {
    border: none;
    padding: 10px;
    background-color: var(--primary-color);
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

const Market = ({ history }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchInput);
    setSearchInput('');
  };

  return (
    <>
      <Sidebar />
      <MarketWrapper>
        <div className="product-search">
          <input
            value={searchInput}
            onChange={handleChange}
            placeholder="도서 검색"
          ></input>
          <button className="search-btn" onClick={handleSubmit}>
            검색
          </button>
          <button className="sell-btn" onClick={() => history.push('/sell')}>
            판매하기
          </button>
        </div>
        <ProductCard />
        <ProductCard />
      </MarketWrapper>
    </>
  );
};

export default withRouter(Market);
