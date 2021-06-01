import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const SidebarWrapper = Styled.div`
  width: 240px;
  height: 100%;
  background-color: var(--theme-color);
  top: 0; 
  left: 0;
  position: absolute;
  z-index: 999;
  padding: 30px;
  
  .logo{
    color: #3c64b1;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    margin-left: 90px;
  }

  .sidebar{
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    padding: 10px;
  }

  .sidebar__title p {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 40px;
    cursor: pointer;
  }
  
  .sidebar__list {
    font-size: 14px;
    margin-bottom: 16px;
    cursor: pointer;
  } 

  .sidebar__list:hover{
    color: var(--primary-color);
    font-weight: bold;
  }
`;

const Sidebar = ({ setProductList }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const data = await axios.get(
        "http://bigbookmarket.kro.kr:8080/book/category"
      );
      console.log("[SUCCESS] GET category data");
      return data.data;
    } catch (e) {
      console.log("[FAIL] GET category data");
      return null;
    }
  };

  const showTotalBooks = () => {
    (async () => {
      const data = await getBooks("");
      console.log(data);
      setProductList(data);
    })();
  };

  const getBooks = async (category) => {
    try {
      const data = await axios.get(
        `https://bigbookmarket.kro.kr/item/list/${category}`
      );
      console.log("[SUCCESS] GET product list data");
      return data.data;
    } catch (e) {
      console.log("[FAIL] GET product list data");
      return null;
    }
  };

  const showSelectedBooks = (e) => {
    (async () => {
      const data = await getBooks(e.target.innerText);
      setProductList(data);
    })();
  };

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setCategories(data);
    })();
  }, []);

  return (
    <SidebarWrapper>
      <Link to="/">
        <div className="logo">대책마켓</div>
      </Link>
      <ul className="sidebar">
        <li className="sidebar__title">
          <p onClick={showTotalBooks}>대학생 전공도서</p>
        </li>
        {categories.map((category, idx) => {
          return (
            <li className="sidebar__list" key={idx}>
              <p onClick={showSelectedBooks}>{category}</p>
            </li>
          );
        })}
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;
