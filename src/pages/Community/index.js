import React, { useState, useEffect } from "react";
import CommunityCard from "../../components/community/CommunityCard";
import { Sidebar } from "../../components";
import { Navbar } from "../../components";
import { getAllBooks } from "../../lib/api/book";
import { Wrapper } from "./style";

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
      <Wrapper>
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
      </Wrapper>
    </>
  );
};

export default Community;
