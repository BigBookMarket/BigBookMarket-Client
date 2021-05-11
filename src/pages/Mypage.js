import React from "react";
import Styled from "styled-components";

const MainWrapper = Styled.div`
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
  font-size: 13px;
  color: #737B7D;
  margin-left: 90px;
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
  background: lightgrey;
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
  return (
    <>
      <MainWrapper>
        <div className="wrapper">
          <p className="bold">마이페이지</p>
          <div className="user-information">
            <div className="img"></div>
            <div className="text-information">
              <p>닉네임</p>
              <p>회원아이디</p>
              <p>전화번호</p>
            </div>
            <button>수정하기</button>
          </div>
          <div className="block-wrapper">
            <div className="block">
              <p>거래내역</p>
              <button>조회하기</button>
            </div>
            <div className="block">
              <p>내가 쓴 게시물</p>
              <button>조회하기</button>
            </div>
            <div className="block">
              <p>내가 쓴 댓글</p>
              <button>조회하기</button>
            </div>
            <div className="block">
              <p>쪽지함</p>
              <button>조회하기</button>
            </div>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default Mypage;