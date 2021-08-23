import React, { useEffect, useState } from "react";
import PostCard from "../../components/community/PostCard";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { getPostList } from "../../lib/api/post";
import { Wrapper } from "./style";

const PostList = ({ location }) => {
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
              bookInfo: bookInfo
            }
          }}
        >
          <Wrapper>
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
          </Wrapper>
        </Link>
      </>
    )
  );
};

export default PostList;
