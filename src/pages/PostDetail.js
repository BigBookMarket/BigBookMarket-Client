import React from "react";
import Styled from "styled-components";
import CommentCard from "../components/CommentCard";

const PostDetailWrapper = Styled.div`
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

  .post-wrapper{
    position: relative;
    width: 800px;
    height: 230px;
    margin-top: 30px;
    margin-bottom: 60px;
    background-color: #EEF2F6;
    padding: 25px 60px;
    display: flex;
    align-items: center;
  }
  
  .post-information{
    width: 200px;
    font-size: 13px;
    text-align: left;
  }

  .post-information__category, .post-information__book{
    font-weight: bold;
    color: #3C64B1;
  }

  .post-information__detail{
    position: absolute;
    top: 35px;
    right: 30px;
    margin-bottom: 100px;
    margin-right: 35px;
    font-weight: bold;
    color: #3C64B1;
  }

  .post-information__title{
    margin-top: 50px;
    font-weight: bold;
    font-size: 16px;
  }

  .post-information__content{
    width: 680px;
    heigth: 65px;
    font-size: 15px;
    overflow: hidden;
    word-break:break-all;
  }

  .comment-wrapper{
      width: 800px;
  }

  .write-wrapper{
    position: relative;
    margin-bottom: 20px;
    width: 800px;
    height: 130px;
    padding: 35px;
    background-color: var(--theme-color);
    display: flex;
    text-align: left;
    align-items: center;
  }

  .comment-btn{
    width: 60px;
    margin-left: 30px;
    margin-top: 50px;
  }

  button{
    border: none;
    padding: 10px;
    background-color: #3c64b1;
    color: white;
    cursor: pointer;
  }

  textarea{
    align-items: center;
    width: 640px;
    height: 98px;
    border: 0px;
  }
`;

const PostDetail = () => {
  return (
    <PostDetailWrapper>
      <div className="book-search">
        <input className="book-search__input" placeholder="도서 검색" />
        <button className="book-search__btn">검색</button>
      </div>
      <div className="post-wrapper">
        <div className="post-information">
          <p className="post-information__category">[카테고리]</p>
          <p className="post-information__book">
            도서명 - 저자 - 출판사, 출판일
          </p>
          <p className="post-information__detail">
            작성자 ID | 작성일자 | 댓글 수 0
          </p>
          <p className="post-information__title">게시글 제목</p>
          <p className="post-information__content">
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          </p>
        </div>
      </div>
      <div className="write-wrapper">
        <textarea></textarea>
        <button className="comment-btn">등록</button>
      </div>
      <div className="comment-wrapper">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </PostDetailWrapper>
  );
};

export default PostDetail;
