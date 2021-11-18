import React, { useEffect } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { getCategoryBooks } from "../../lib/api/book";
import { getCategoryProducts } from "../../lib/api/item";
import history from "../../utils/history";
import connectStore from "../../hoc/connectStore";

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

const Sidebar = ({ book: { categoryList }, actions }) => {
  const { location } = history;

  const showTotalBooks = () => {
    if (location.pathname === "/community") {
      actions.showBooks("");
    } else {
      actions.showItems("");
    }
  };

  const showSelectedBooks = (e) => {
    if (location.pathname === "/community") {
      actions.showBooks(e.target.innerText);
    } else {
      actions.showItems(e.target.innerText);
    }
  };

  useEffect(() => {
    actions.getBookCategories();
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
        {categoryList?.map((category, idx) => {
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

export default connectStore(Sidebar);
