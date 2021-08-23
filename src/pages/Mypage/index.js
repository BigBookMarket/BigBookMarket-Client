import React from "react";
import { Navbar } from "../../components";
import { Link } from "react-router-dom";
import { ProfileImage } from "../../assets/images";
import { Wrapper } from "./style";

const Mypage = () => {
  const myId = localStorage.getItem("userId");
  const myNickname = localStorage.getItem("userNickname");
  const myPhone = localStorage.getItem("phone");

  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="wrapper">
          <p className="bold">마이페이지</p>
          <div className="user-information">
            <img className="profile-img" src={ProfileImage} alt="" />
            <div className="text-information">
              <p>닉네임: {myNickname}</p>
              <p>아이디: {myId} </p>
              <p>전화번호: {myPhone} </p>
            </div>
          </div>
          <div className="block-wrapper">
            <div className="block">
              <p>거래내역</p>
              <Link to="/mypage/market">
                <button>조회하기</button>
              </Link>
            </div>
            <div className="block">
              <p>내가 쓴 게시물</p>
              <Link to="/mypage/post">
                <button>조회하기</button>
              </Link>
            </div>
            <div className="block">
              <p>내가 쓴 댓글</p>
              <Link to="/mypage/comment">
                <button>조회하기</button>
              </Link>
            </div>
            <div className="block">
              <p>쪽지함</p>
              <Link to="/mypage/message">
                <button>조회하기</button>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Mypage;
