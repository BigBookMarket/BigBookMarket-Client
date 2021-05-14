import React from "react";
import Styled from "styled-components";
import PostCard from "../components/PostCard";

const PostWrapper = Styled.div`
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

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
    margin-left: 20px;
    padding: 10px;
    width: 64px;
    height: 40px;
  }

  .book-wrapper{
    width: 800px;
    height: 230px;
    margin-top: 30px;
    margin-bottom: 60px;
    background-color: #EEF2F6;
    padding: 25px 60px;
    display: flex;
  }
  
  .img{
    width: 180px;
    height: 180px;
    background-color: #C4C4C4;
  }
  
  .book-information{
    width: 200px;
    font-size: 13px;
    margin-left: 70px;
    text-align: left;
  }

  .information__category{
    font-weight: bold;
    margin-top: 10px;
  }

  .information__title{
    font-weight: bold;
  }

  .information__author{
    margin-top: 20px;
  }

  .information__date{
    margin-top: 10px;
    width: 100px;
    font-size: 13px;
  }

  .post__btn {
    padding: 8px;
    height: 40px;
    width: 120px;
    font-size: 12px;
    margin-top: 130px;
    margin-left: 50px;
  }

  .post-wrapper{
      width: 800px;
  }

  button{
    border: none;
    padding: 10px;
    background-color: #3c64b1;
    color: white;
    cursor: pointer;
  }
`;

const Post = () => {
  return (
    <PostWrapper>
      <div className="book-search">
        <input className="book-search__input" placeholder="도서 검색" />
        <button className="book-search__btn">검색</button>
      </div>
      <div className="book-wrapper">
        <div className="img"></div>
        <div className="book-information">
          <p className="information__category">[카테고리]</p>
          <p className="information__title">도서명</p>
          <p className="information__author">저자</p>
          <p className="information__publisher">출판사, 출판일</p>
        </div>
        <p className="information__date">작성일자</p>
        <button className="post__btn">게시글 작성하기</button>
      </div>
      <div className="post-wrapper">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </PostWrapper>
  );
};

export default Post;
