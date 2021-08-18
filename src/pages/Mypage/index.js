import React from "react";
import Styled from "styled-components";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { ProfileImage } from "../../assets/images";

const MypageWrapper = Styled.div`
margin: 110px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;

.wrapper{
  padding: 16px;
  width: 800px;
}

.bold{
  font-size: 36px;
  font-weight: bold;
}

.user-information{
  height: 170px;
  margin-top: 30px;
  margin-bottom: 60px;
  background-color: #EEF2F6;
  padding: 20px 60px;
  display: flex;
}

.img{
  width: 125px;
  height: 130px;
  background-color: #C4C4C4;
}

.text-information{
  width: 300px;
  font-size: 16px;
  color: #737B7D;
  margin-left: 70px;
  margin-top: 10px;
  text-align: left;
}

p{
  margin-bottom: 20px;
}

button{
  padding: 8px;
  height: 40px;
  width: 85px;
  margin-top: 80px;
  margin-left: 50px;
  border: 1px solid var(--primary-color);
  background-color: #3c64b1;
  color: #fff;
  cursor: pointer;
}

.block-wrapper{
  display: flex;
  flex-wrap: wrap;
}

.block-wrapper div:nth-child(2n){
  margin-left: 20px;
}

.block{
  margin: 10px 0;
  height: 270px;
  width: 370px;
  background: var(--theme-color);
  border-radius: 25px;
}

.block p:nth-child(n){
  font-weight: bold;
  font-size: 35px;
  color: #737B7D;
  margin-top: 40px;
  margin-left: 50px;
  text-align: left;
}

.block button:nth-child(n){
  margin-top: 90px;
  margin-left: 200px;
  font-weight: bold;
}
`;

const Mypage = () => {
  const myId = localStorage.getItem("userId");
  const myNickname = localStorage.getItem("userNickname");
  const myPhone = localStorage.getItem("phone");

  return (
    <>
      <Navbar />
      <MypageWrapper>
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
      </MypageWrapper>
    </>
  );
};

export default Mypage;
