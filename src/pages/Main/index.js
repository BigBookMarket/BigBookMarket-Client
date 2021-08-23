import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { MainImage } from "../../assets/images";
import { Wrapper } from "./style";

const Main = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
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
      </Wrapper>
    </>
  );
};

export default Main;
