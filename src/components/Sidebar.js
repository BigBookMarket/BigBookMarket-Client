import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import axios from "axios";

const SidebarWrapper = Styled.div`
  width: 240px;
  height: 100%;
  background-color: var(--theme-color);
  top: 0; 
  left: 0;
  position: absolute;
  z-index: -999;
  padding: 40px;

  .sidebar{
    display: flex;
    flex-direction: column;
    margin-top: 80px;
  }

  .sidebar__title p {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  
  .sidebar__list {
    font-size: 14px;
    margin-bottom: 16px;
  } 
`;

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

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setCategories(data);
    })();
  }, []);

  return (
    <SidebarWrapper>
      <ul className="sidebar">
        <li className="sidebar__title">
          <p>대학생 전공도서</p>
        </li>
        {categories.map((category, idx) => {
          return (
            <li className="sidebar__list" key={idx}>
              <p>{category}</p>
            </li>
          );
        })}
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;
