import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { SearchDropdown } from "../../components";
import { Navbar } from "../../components";
import * as Services from "../../data/rootServices";
import { Wrapper } from "./style";
import connectStore from "../../hoc/connectStore";

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 280,
    backgroundColor: "#fff",
    marginTop: "20px"
  }
}));

const Sell = ({ actions }) => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState("");
  const [options, setOptions] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  const [inputs, setInputs] = useState({
    category: "",
    title: "",
    standardPrice: "",
    author: "",
    publisher: "",
    sellPrice: "",
    method: "",
    status: "",
    detail: "",
    coverImage: ""
  });

  const {
    category,
    title,
    standardPrice,
    author,
    publisher,
    sellPrice,
    method,
    status,
    detail,
    coverImage
  } = inputs;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchButton = async (e) => {
    e.preventDefault();
    const bookInfo = await Services.getAladinBooks(searchInput);
    setOptions(bookInfo.item);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sellData = {
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
      detail: inputs.detail,
      method: inputs.method,
      price: parseInt(inputs.sellPrice),
      id: localStorage.getItem("userId")
    };
    await Services.sellItem(sellData);
  };

  useEffect(() => {
    if (selectedBook) {
      setInputs({
        ...inputs,
        category: selectedBook.categoryName.split(">")[2],
        title: selectedBook.title,
        standardPrice: selectedBook.priceStandard,
        author: selectedBook.author,
        publisher: selectedBook.publisher,
        coverImage: selectedBook.cover
      });
    }
  }, [options, selectedBook]);

  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="page-title">????????? ????????????</div>
        <form onSubmit={handleSubmit}>
          <div className="product-form">
            <img className="product-form__img" src={coverImage} alt="" />
            <div className="product-form__info">
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
                value={category}
                className="info__category"
                placeholder="????????????"
                readOnly
              />
              <input
                name="title"
                onChange={handleInputChange}
                value={title}
                className="info__title"
                placeholder="?????????"
                readOnly
              />
              <input
                onChange={handleInputChange}
                value={standardPrice}
                name="standardPrice"
                className="info__price"
                placeholder="????????????"
                readOnly
              />
              <input
                name="author"
                onChange={handleInputChange}
                value={author}
                className="info__author"
                placeholder="??????"
                readOnly
              />
              <input
                onChange={handleInputChange}
                value={publisher}
                name="publisher"
                className="info__publisher"
                placeholder="?????????/ ?????????"
                readOnly
              />
            </div>
          </div>
          <div className="deal-form">
            <div className="deal-form__info">
              <input
                type="number"
                onChange={handleInputChange}
                value={sellPrice}
                className="info__sellPrice"
                name="sellPrice"
                placeholder="????????? (???)"
              />
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  ????????????
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="method"
                  value={method}
                  onChange={handleInputChange}
                  label="????????????"
                >
                  <MenuItem value="DELIVERY">
                    <em>??????</em>
                  </MenuItem>
                  <MenuItem value="DIRECT">
                    <em>?????????</em>
                  </MenuItem>
                  <MenuItem value="BOTH">
                    <em>????????????</em>
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  ????????????
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="status"
                  value={status}
                  onChange={handleInputChange}
                  label="????????????"
                >
                  <MenuItem value="SALE">
                    <em>?????????</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="deal-form__detail">
              <p>?????? ?????? ????????? ??????????????????. ?????? ????????? ??????????????????</p>
              <textarea
                name="detail"
                value={detail}
                onChange={handleInputChange}
                placeholder="??????"
              />
            </div>
          </div>
          <button type="submit" className="form-submit-btn">
            ??????
          </button>
        </form>
      </Wrapper>
    </>
  );
};

export default connectStore(Sell);
