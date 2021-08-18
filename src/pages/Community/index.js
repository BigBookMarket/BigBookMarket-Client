import React, { useState, useEffect } from "react";
import CommunityCard from "../../components/community/CommunityCard";
import { Sidebar } from "../../components";
import Styled from "styled-components";
import { Navbar } from "../../components";
import { getAllBooks } from "../../lib/api/book";

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
    margin-top: 20px;
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
    background-color: ${({ theme }) => theme.colors.dark_blue};
    color: white;
    cursor: pointer;
  }

  .post-btn{
    border: none;
    margin-left: 60px;
    padding: 10px;
    width: 120px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.dark_blue};
    color: white;
    cursor: pointer;
    }
`;

const Community = ({ history }) => {
  const [searchInput, setSearchInput] = useState("");
  const [bookList, setBookList] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchedBooks = bookList.filter((book) =>
      book.title.includes(searchInput)
    );
    setBookList(searchedBooks);
    setSearchInput("");
  };

  useEffect(() => {
    (async () => {
      const data = await getAllBooks();
      setBookList(data);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar setProductList={setBookList} />
      <CommunityWrapper>
        <form className="book-search" onSubmit={handleSubmit}>
          <input
            className="book-search__input"
            value={searchInput}
            onChange={handleChange}
            placeholder="도서 검색"
          />
          <button className="book-search__btn">검색</button>
          <button
            className="post-btn"
            onClick={() => history.push("/newpost-write")}
          >
            게시글 작성하기
          </button>
        </form>
        <div className="book-cards">
          {bookList?.map((book) => (
            <CommunityCard key={book.bookId} book={book} />
          ))}
        </div>
      </CommunityWrapper>
    </>
  );
};

export default Community;
