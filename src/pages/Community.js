import React from 'react';
import CommunityCard from '../components/CommunityCard';
import Sidebar from '../components/Sidebar';
import Styled from 'styled-components';

const CommunityWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 240px;
  margin-top: 30px;
  flex-wrap: wrap;
  padding: 0 60px;

  .book-cards{
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    width: 1110px;
  }

  .book-search{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .book-search__input{
    padding: 10px;
    width: 280px;
    height: 42px;
    border: none;
    background-color: #F3F6FA;
  }

  .book-search__btn {
    border: none;
    margin-left: 20px;
    padding: 10px;
    width: 64px;
    height: 40px;
    background-color: #3c64b1;
    color: white;

    &:hover{
      cursor: pointer;
    }
  }
`;

const Community = () => {
  return (
    <>
      <Sidebar />
      <CommunityWrapper>
        <div className="book-search">
          <input className="book-search__input" placeholder="도서 검색" />
          <button className="book-search__btn">검색</button>
        </div>
        <div className="book-cards">
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </div>
      </CommunityWrapper>
    </>
  );
};

export default Community;
