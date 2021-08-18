import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { MainImage } from "../../assets/images";

const MainWrapper = Styled.div`
  display: flex;
  max-width: 1100px;
  margin: 120px auto;

  .intro{
    margin-left: 32px;
    padding-top: 30px;
    width: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__logo {
      margin-left: 3px;
      font-weight: bold;
      font-size: 32px;
      color: ${({ theme }) => theme.colors.dark_blue};
    }
  }

  .main-img{
    width: 600px;
    height: 380px;
  }

  .intro p:nth-child(1){
    font-size: 36px;
    color: ${({ theme }) => theme.colors.dark_blue};
  }

  .intro p:nth-child(3){
    margin-top: 40px;
    font-size: 16px;
  }

  button{
    padding: 12px;
    margin-top: 42px;
    background-color: #fff;
    color: ${({ theme }) => theme.colors.dark_blue};
    font-weight: bold;
    border: 1px solid ${({ theme }) => theme.colors.dark_blue};
  }

  button:hover{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.dark_blue};
    color: #fff;
  }

  .buttons{
    display:flex;
  }

  .community-btn{
      margin-left: 40px;
  }
`;

const Main = () => {
  return (
    <>
      <Navbar />
      <MainWrapper>
        <img src={MainImage} alt="" className="main-img" />
        <div className="intro">
          <p>
            대학생들을 위한 <br />
            도서 및 지식공유 플랫폼
          </p>
          <p className="intro__logo">대책마켓</p>
          <p>
            저희 &quot;대책마켓 &quot;은 대학생들이 전공책을 쉽게 판매하고
            <br />
            구매할 수 있는 서비스이자, 해당 전공도서 내용들을 바탕으로 더
            심도있게 공부할 수 있는 서비스입니다.
          </p>
          <div className="buttons">
            <Link to="/market">
              <button className="market-btn">도서거래</button>
            </Link>
            <Link to="/community">
              <button className="community-btn">커뮤니티</button>
            </Link>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default Main;
