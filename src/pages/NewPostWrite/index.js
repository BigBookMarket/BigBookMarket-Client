import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { SearchDropdown } from "../../components";
import { Navbar } from "../../components";
import { writePost } from "../../lib/api/post";
import { withRouter } from "react-router-dom";
import { getAladinBooks } from "../../lib/api/aladin";
import { Wrapper } from "./style";

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 280,
    backgroundColor: "#fff",
    marginTop: "20px"
  }
}));

const NewPostWrite = ({ history, location }) => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState("");
  const [options, setOptions] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [post, setPost] = useState({
    bookIitle: "",
    bookAuthor: "",
    bookCategory: "",
    bookPublisher: "",
    bookPubDate: "",
    bookPrice: 0,
    bookImage: "",
    postCategory: "",
    postTitle: "",
    postContent: ""
  });

  const {
    bookTitle,
    bookAuthor,
    bookCategory,
    bookPublisher,
    bookPrice,
    bookImage,
    postCategory,
    postTitle,
    postContent
  } = post;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value
    });
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchButton = (e) => {
    e.preventDefault();
    (async () => {
      const bookInfo = await getAladinBooks(searchInput);
      setOptions(bookInfo.item);
    })();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      book: {
        bookId: selectedBook.isbn,
        title: selectedBook.title,
        author: selectedBook.author,
        category: selectedBook.categoryName.split(">")[2],
        publisher: selectedBook.publisher,
        pubDate: selectedBook.pubDate,
        priceStandard: selectedBook.priceStandard,
        image: selectedBook.cover
      },
      category: post.postCategory,
      title: post.postTitle,
      content: post.postContent,
      id: localStorage.getItem("userId")
    };
    console.log(postData);
    await writePost(postData);
    history.goBack();
  };

  useEffect(() => {
    if (selectedBook) {
      setPost({
        ...post,
        bookCategory: selectedBook.categoryName.split(">")[2],
        bookTitle: selectedBook.title,
        bookAuthor: selectedBook.author,
        bookPublisher: selectedBook.publisher,
        bookPrice: selectedBook.priceStandard,
        bookImage: selectedBook.cover
      });
    }
  }, [options, selectedBook]);

  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="page-title">게시글 작성하기</div>
        <form onSubmit={handleSubmit}>
          <div className="book-form">
            <img className="book-form__img" src={bookImage} alt="" />
            <div className="book-form__info">
              <div className="info__search">
                <SearchDropdown
                  handleSearchInput={handleSearchInput}
                  searchInput={searchInput}
                  options={options}
                  onChange={(val) => setSearchInput(val)}
                  setSelectedBook={setSelectedBook}
                />
                <button onClick={handleSearchButton}>검색</button>
              </div>

              <input
                onChange={handleInputChange}
                name="category"
                value={bookCategory}
                className="info__category"
                placeholder="카테고리"
                readOnly
              />
              <input
                name="title"
                onChange={handleInputChange}
                value={bookTitle}
                className="info__title"
                placeholder="도서명"
                readOnly
              />
              <input
                onChange={handleInputChange}
                value={bookPrice}
                name="standardPrice"
                className="info__price"
                placeholder="정가정보"
                readOnly
              />
              <input
                name="author"
                onChange={handleInputChange}
                value={bookAuthor}
                className="info__author"
                placeholder="저자"
                readOnly
              />
              <input
                name="publisher"
                onChange={handleInputChange}
                value={bookPublisher}
                className="info__publisher"
                placeholder="출판사/ 출판일"
                readOnly
              />
            </div>
          </div>
          <div className="post-form">
            <div className="post-form__info">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  게시글 카테고리
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="postCategory"
                  value={postCategory}
                  onChange={handleInputChange}
                  label="카테고리"
                >
                  <MenuItem value="QUESTION">
                    <em>질문</em>
                  </MenuItem>
                  <MenuItem value="REVIEW">
                    <em>후기</em>
                  </MenuItem>
                  <MenuItem value="REVISION">
                    <em>개정</em>
                  </MenuItem>
                  <MenuItem value="FREE">
                    <em>자유</em>
                  </MenuItem>
                </Select>
              </FormControl>

              <input
                onChange={handleInputChange}
                value={postTitle}
                className="post__title"
                name="postTitle"
                placeholder="게시글 제목"
              />
            </div>
            <textarea
              name="postContent"
              value={postContent}
              onChange={handleInputChange}
              placeholder="내용"
            />
            <button className="post-submit-btn">완료</button>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default withRouter(NewPostWrite);
