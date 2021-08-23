import Styled from "styled-components";

export const Wrapper = Styled.div`
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
