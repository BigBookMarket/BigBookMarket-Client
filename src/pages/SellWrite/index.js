import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { SearchDropdown } from "../../components";
import { Navbar } from "../../components";
import { writeProductSell } from "../../lib/api/item";
import { getAladinBooks } from "../../lib/api/aladin";

const SellWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;

  .page-title{
    font-weight: bold;
    font-size: 28px;
  }

  form{
    margin-top: 28px;
    width: 900px;
    height: 540px;
    background-color: var(--theme-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  form input {
    padding: 10px;
    width: 280px;
    height: 42px;
    border: none;
    margin-top: 18px;
    margin-right: 12px;

    &.info__category {
      width: 140px;
    }

    &.info__price {
      width: 100px;
    }

    &.info__publisher {
      width: 250px;
    }
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  form button {
    border: none;
    padding: 10px;
    width: 64px;
    height: 40px;
    background-color: var(--primary-color);
    color: #fff;
    cursor: pointer;
  }

  .product-form {
    display: flex;
    margin-top: 40px;

    &__img {
      width: 200px;
      height: 200px;
      background-color: lightgrey;  
    background-color: lightgrey;
      background-color: lightgrey;  
    }

    &__info{
      width: 580px;
      height: 200px;
      padding-left: 20px; 
    padding-left: 20px;
      padding-left: 20px; 
    }
  }

  .info__search {
    display: flex;
    position: relative;

    & button{
      position: absolute;
      bottom: 0;
      left: 300px; 
    }
  }

  .deal-form{
    margin-top: 10px;
    width: 780px;
    padding: 10px;
    display: flex;
    align-items: center;

    &__detail > p{
      font-size : 14px;
    }

    & textarea {
      margin-top: 8px;
      width: 400px;
      height: 180px;
      padding: 10px;
      resize: none;
      border: none; 
    border: none;
      border: none; 
    }
  }
  .form-submit-btn {
    position: absolute;
    right: 70px;
    bottom: 15px;
  }
`;

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 280,
    backgroundColor: "#fff",
    marginTop: "20px"
  }
}));

const Sell = ({ history }) => {
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
      detail: inputs.detail,
      method: inputs.method,
      price: parseInt(inputs.sellPrice),
      id: localStorage.getItem("userId")
    };
    await writeProductSell(postData);
    history.push("/market");
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
      <SellWrapper>
        <div className="page-title">판매글 작성하기</div>
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
                <button onClick={handleSearchButton}>검색</button>
              </div>

              <input
                onChange={handleInputChange}
                name="category"
                value={category}
                className="info__category"
                placeholder="카테고리"
                readOnly
              />
              <input
                name="title"
                onChange={handleInputChange}
                value={title}
                className="info__title"
                placeholder="도서명"
                readOnly
              />
              <input
                onChange={handleInputChange}
                value={standardPrice}
                name="standardPrice"
                className="info__price"
                placeholder="정가정보"
                readOnly
              />
              <input
                name="author"
                onChange={handleInputChange}
                value={author}
                className="info__author"
                placeholder="저자"
                readOnly
              />
              <input
                onChange={handleInputChange}
                value={publisher}
                name="publisher"
                className="info__publisher"
                placeholder="출판사/ 출판일"
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
                placeholder="판매가 (원)"
              />
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  거래방법
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="method"
                  value={method}
                  onChange={handleInputChange}
                  label="거래방법"
                >
                  <MenuItem value="DELIVERY">
                    <em>택배</em>
                  </MenuItem>
                  <MenuItem value="DIRECT">
                    <em>직거래</em>
                  </MenuItem>
                  <MenuItem value="BOTH">
                    <em>둘다가능</em>
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  거래상태
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="status"
                  value={status}
                  onChange={handleInputChange}
                  label="거래상태"
                >
                  <MenuItem value="SALE">
                    <em>판매중</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="deal-form__detail">
              <p>상품 상세 내용을 입력해주세요. 상품 상태도 기입해주세요</p>
              <textarea
                name="detail"
                value={detail}
                onChange={handleInputChange}
                placeholder="설명"
              />
            </div>
          </div>
          <button type="submit" className="form-submit-btn">
            완료
          </button>
        </form>
      </SellWrapper>
    </>
  );
};

export default Sell;
