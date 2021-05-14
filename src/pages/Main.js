import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const MainWrapper = Styled.div`
  display: flex;
  max-width: 1100px;
  margin: 120px auto;

  .intro{
    margin-left: 32px;
    padding: 16px;
    width: 460px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .img{
    width: 600px;
    height: 400px;
    background-color: lightgrey;
  }

  .intro p:nth-child(1){
    font-size: 36px;
    font-weight: bold;
  }

  .intro p:nth-child(2){
    margin-top: 40px;
    font-size: 16px;
    color: #737B7D;
  }

  button{
    padding: 10px;
    margin-top: 42px;
    background-color: #fff;
    color: var(--primary-color);
    font-weight: bold;
    border: 1px solid var(--primary-color);
  }

  button:hover{
    cursor: pointer;
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
      <MainWrapper>
        <div className="img"></div>
        <div className="intro">
          <p>
            대학생들을 위한 <br />
            도서 및 지식공유 플랫폼
          </p>
          <p>
            저희 &quot;대책마켓 &quot;은 대학생들이 전공책을 쉽게 판매하고
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
