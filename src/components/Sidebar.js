import React from 'react';
import Styled from 'styled-components';

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
    margin-top: 60px;
  }

  .sidebar__title p {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  
  .sidebar__list{
    margin-bottom: 16px;
  } 
`;

const categories = [
  {
    id: 1,
    content: 'content 1',
  },
  {
    id: 2,
    content: 'content 2',
  },
  {
    id: 3,
    content: 'content 3',
  },
  {
    id: 4,
    content: 'content 4',
  },
];

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <ul className="sidebar">
        <li className="sidebar__title">
          <p>대학생 전공도서</p>
        </li>
        {categories.map((category) => {
          return (
            <div className="sidebar__list" key={category.id}>
              <li>{category.content}</li>
            </div>
          );
        })}
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;
