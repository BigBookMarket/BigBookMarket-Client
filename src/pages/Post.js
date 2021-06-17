import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import PostCard from "../components/community/PostCard";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getPostList } from "../lib/api/post";

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
    position: relative;
  }
  
  .img{
    width: 180px;
    height: 180px;
    background-color: #C4C4C4;
  }
  
  .book-information{
    width: 400px;
    font-size: 16px;
    margin-left: 48px;
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
    position: absolute;
    right: 20px;
    bottom: 20px;
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

const Post = ({ location }) => {
  const [bookInfo, setBookInfo] = useState(null);
  const [postList, setPostList] = useState(null);
  const bookId = location.state.bookId;

  useEffect(() => {
    (async () => {
      const data = await getPostList(bookId);
      setBookInfo(data.book);
      setPostList(data.postList);
    })();
  }, []);
  return (
    postList && (
      <>
        <Navbar />
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={{
            pathname: "post-write",
            state: {
              bookId: bookId,
            },
          }}
        >
          <PostWrapper>
            <div className="book-search">
              <input className="book-search__input" placeholder="도서 검색" />
              <button className="book-search__btn">검색</button>
            </div>
            <div className="book-wrapper">
              <img className="img" src={bookInfo.image} alt="" />
              <div className="book-information">
                <p className="information__category">[{bookInfo.category}]</p>
                <p className="information__title">{bookInfo.title}</p>
                <p className="information__author">{bookInfo.author}</p>
                <p className="information__publisher">{bookInfo.publisher}</p>
              </div>
              <button className="post__btn">게시글 작성하기</button>
            </div>
            <div className="post-wrapper">
              {postList?.map((post) => (
                <PostCard key={post.postId} post={post} bookInfo={bookInfo} />
              ))}
            </div>
          </PostWrapper>
        </Link>
      </>
    )
  );
};

export default Post;
