import Styled from "styled-components";

export const Wrapper = Styled.div`
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
  background-color: ${({ theme }) => theme.colors.light_blue};
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
  background-color: ${({ theme }) => theme.colors.dark_blue};
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
