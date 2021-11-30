import Styled from "styled-components";

export const Wrapper = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

button {
  padding: 8px;
  width: 150px;
  border: none;
  background-color: ${({ theme }) => theme.colors.dark_blue};
  color: #fff;
  cursor: pointer;
}

.page-title{
  margin-top: 28px;
  font-weight: bold;
  font-size: 28px;
}

.product {
  margin-top: 40px;
  width: 800px;
  height: 520px;
  background-color: ${(props) => (props.isSold ? "#DDDDDD" : "#EEF2F6")};
  position: relative;
}

.product span {
  display: inline-block;
  font-weight: bold;
  width: 80px;
}

.product__img{
  width: 260px;
  height: 260px;
  background-color: lightgrey;
  position: absolute;
  left: 48px;
  top: 80px;
}

.product__btn{
  color: ${({ theme }) => theme.colors.dark_blue};
  font-weight: bold;
  cursor: pointer;
}

.product__info{
  width: 430px;
  height: 380px;
  font-size: 16px;
  position: absolute;
  right: 20px;
  top: 40px;

  & p {
    margin-top: 5px;
  }

  &_date {
    font-size: 14px;
    margin-bottom: 18px;
  }

  &_title, &_category {
    font-weight: bold; 
    color: ${({ theme }) => theme.colors.dark_blue};
  }

  &_author{
    font-size: 16px;
  }

  &_publisher{
    margin-bottom: 15px;
    font-size: 16px;
  } 
  
  &_status{
    margin-bottom: 15px;
  }

  &_detail > div {
    height: 80px;
    width: 400px;
  }

}

.product__btn--buy {
  width: 80px;
  position: absolute;
  bottom: 20px;
  right: 50px;
}
`;
