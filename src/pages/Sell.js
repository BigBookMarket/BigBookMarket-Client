import React, { useState } from "react";
import Styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
  }

  .product-form__img{
    width: 200px;
    height: 200px;
    background-color: lightgrey;
  }
  
  .product-form__info{
    width: 580px;
    height: 200px;
    padding-left: 20px;
  }

  input.info__category {
    width: 140px;
  }

  input.info__price{
    width: 100px;
  }

  input.info__publisher{
    width: 250px;
  }

  .info__search button{
    margin-left: 20px;
  }

  .deal-form{
    margin-top: 10px;
    width: 780px;
    padding: 10px;
    display: flex;
    align-items: center;
  }

  .deal-form__detail > p{
    font-size : 14px;
  }

  .deal-form textarea{
    margin-top: 8px;
    width: 400px;
    height: 180px;
    padding: 10px;
    resize: none;
    border: none;
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
    marginTop: "20px",
  },
}));

const Sell = () => {
  const classes = useStyles();

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
  } = inputs;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <SellWrapper>
      <div className="page-title">판매글 작성하기</div>
      <form onSubmit={handleSubmit}>
        <div className="product-form">
          <div className="product-form__img"></div>
          <div className="product-form__info">
            <div className="info__search">
              <input placeholder="도서 검색" />
              <button>검색</button>
            </div>
            <input
              onChange={handleInputChange}
              name="category"
              value={category}
              className="info__category"
              placeholder="카테고리"
            />
            <input
              name="title"
              onChange={handleInputChange}
              value={title}
              className="info__title"
              placeholder="도서명"
            />
            <input
              onChange={handleInputChange}
              value={standardPrice}
              name="standardPrice"
              className="info__price"
              placeholder="정가정보"
            />
            <input
              name="author"
              onChange={handleInputChange}
              value={author}
              className="info__author"
              placeholder="저자"
            />
            <input
              onChange={handleInputChange}
              value={publisher}
              name="publisher"
              className="info__publisher"
              placeholder="출판사/ 출판일"
            />
          </div>
        </div>
        <div className="deal-form">
          <div className="deal-form__info">
            <input
              onChange={handleInputChange}
              value={sellPrice}
              className="info__sellPrice"
              name="sellPrice"
              placeholder="판매가"
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
                <MenuItem value="택배">
                  <em>택배</em>
                </MenuItem>
                <MenuItem value="직거래">
                  <em>직거래</em>
                </MenuItem>
                <MenuItem value="둘다가능">
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
                <MenuItem value="판매중">
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
        <button className="form-submit-btn">완료</button>
      </form>
    </SellWrapper>
  );
};

export default Sell;
