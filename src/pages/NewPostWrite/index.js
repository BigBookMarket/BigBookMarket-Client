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
        <div className="page-title">????????? ????????????</div>
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
                <button onClick={handleSearchButton}>??????</button>
              </div>

              <input
                onChange={handleInputChange}
                name="category"
                value={bookCategory}
                className="info__category"
                placeholder="????????????"
                readOnly
              />
              <input
                name="title"
                onChange={handleInputChange}
                value={bookTitle}
                className="info__title"
                placeholder="?????????"
                readOnly
              />
              <input
                onChange={handleInputChange}
                value={bookPrice}
                name="standardPrice"
                className="info__price"
                placeholder="????????????"
                readOnly
              />
              <input
                name="author"
                onChange={handleInputChange}
                value={bookAuthor}
                className="info__author"
                placeholder="??????"
                readOnly
              />
              <input
                name="publisher"
                onChange={handleInputChange}
                value={bookPublisher}
                className="info__publisher"
                placeholder="?????????/ ?????????"
                readOnly
              />
            </div>
          </div>
          <div className="post-form">
            <div className="post-form__info">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  ????????? ????????????
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="postCategory"
                  value={postCategory}
                  onChange={handleInputChange}
                  label="????????????"
                >
                  <MenuItem value="QUESTION">
                    <em>??????</em>
                  </MenuItem>
                  <MenuItem value="REVIEW">
                    <em>??????</em>
                  </MenuItem>
                  <MenuItem value="REVISION">
                    <em>??????</em>
                  </MenuItem>
                  <MenuItem value="FREE">
                    <em>??????</em>
                  </MenuItem>
                </Select>
              </FormControl>

              <input
                onChange={handleInputChange}
                value={postTitle}
                className="post__title"
                name="postTitle"
                placeholder="????????? ??????"
              />
            </div>
            <textarea
              name="postContent"
              value={postContent}
              onChange={handleInputChange}
              placeholder="??????"
            />
            <button className="post-submit-btn">??????</button>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default withRouter(NewPostWrite);
