import Styled from "styled-components";

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 280px;
  position: relative;

  .product-search{
    margin: 40px 0;
    display: flex;
    position: relative;
    width: 800px;
    justify-content: center;
    align-items: center;
  }

  .product-search input{
    padding: 10px;
    width: 280px;
    height: 42px;
    border: none;
    background-color: ${({ theme }) => theme.colors.light_blue};
  }

  button {
    border: none;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.dark_blue};
    color: #fff;
    cursor: pointer;
  }

  .search-btn {
    width: 64px;
    margin-left: 20px;
  }

  .sell-btn {
    width: 80px;
    position: absolute;
    right: 0;
  }
`;
