import Styled from "styled-components";

export const Wrapper = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 48px;
position: relative;

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
  align-items: flex-start;
  position: relative;
} 

button {
  border: none;
  padding: 10px;
  width: 80px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.dark_blue};
  color: #fff;
  cursor: pointer;
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

.post-form {
    display: flex;
    flex-direction: column;
    width: 760px;
    margin-left: 60px;

    &__info{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

.post__title{
  width: 400px;
  position: absolute;
  right: 70px;
}

textarea{
  margin-top: 30px;
  height: 130px;
  padding: 10px;
  resize: none;
  border: none;
  font-size: 16px;
}

.post-submit-btn {
  position: absolute;
  right: 70px;
  bottom: 15px;
}

.book-form {
  display: flex;
  margin-top: 40px;
  margin-left: 60px;

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
`;
