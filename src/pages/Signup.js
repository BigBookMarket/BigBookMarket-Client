import React from 'react';
import Styled from 'styled-components';

const MainWrapper = Styled.div`
text-align: center;
width: 500px;
position: absolute;
left: 50%;
margin: 110px;
margin-left: -250px;

.signup{
  padding: 16px;
  width: 460px;
}

.signup p:nth-child(1){
  font-size: 36px;
  font-weight: bold;
}

.information{
  margin-top: 60px;
}

.input{
  font-size: 13px;
  width: 250px;
  padding: 10px;
  padding-left: 18px;
  padding-right: 18px;
  margin-top: 30px;
  background-color: #F3F6FA;
  color: #737B7D;
  border: 0;
  border-radius: 1.5px;
}

button{
  padding: 8px;
  width: 80px;
  margin-top: 55px;
  border: 1px solid var(--primary-color);
  background-color: #3c64b1;
  color: #fff;
}
`;

const Signup = () => {
  return (
    <MainWrapper>
      <div className="signup">
        <p>회원가입</p>
        <div className="information">
          <input type="text" className="input" value="회원아이디"></input><br></br>
          <input type="text" className="input" value="닉네임"></input><br></br>
          <input type="text" className="input" value="비밀번호"></input><br></br>
          <input type="text" className="input" value="전화번호"></input><br></br>
          <button>가입하기</button>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Signup;
