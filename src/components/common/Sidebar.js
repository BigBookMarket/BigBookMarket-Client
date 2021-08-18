import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { getCategoryList, getCategoryBooks } from "../../lib/api/book";
import { getCategoryProducts } from "../../lib/api/item";

const SidebarWrapper = Styled.div`
  width: 240px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.light_blue};
  top: 0; 
  left: 0;
  position: absolute;
  z-index: 999;
  padding: 30px;
  
  .logo{
    color: ${({ theme }) => theme.colors.dark_blue};
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
    color: ${({ theme }) => theme.colors.dark_blue};
    font-weight: bold;
  }
`;

const Sidebar = ({ setProductList, location }) => {
  let data;
  const [categories, setCategories] = useState([]);

  const showTotalBooks = () => {
    (async () => {
      if (location.pathname === "/community") {
        data = await getCategoryBooks("");
      } else {
        data = await getCategoryProducts("");
      }
      console.log(data);
      setProductList(data);
    })();
  };

  const showSelectedBooks = (e) => {
    (async () => {
      if (location.pathname === "/community") {
        data = await getCategoryBooks(e.target.innerText);
      } else {
        data = await getCategoryProducts(e.target.innerText);
      }
      console.log(data);
      setProductList(data);
    })();
  };

  useEffect(() => {
    (async () => {
      const data = await getCategoryList();
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

export default withRouter(Sidebar);
