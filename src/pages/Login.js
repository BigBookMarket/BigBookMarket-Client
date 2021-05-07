import React from 'react';
import Styled from 'styled-components';

const MainWrapper = Styled.div`
text-align: center;
width: 500px;
position: absolute;
left: 50%;
margin: 110px;
margin-left: -250px;

.login{
  padding: 16px;
  width: 460px;
}

.login p:nth-child(1){
  font-size: 36px;
  font-weight: bold;
}

.information{
  margin-top: 95px;
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
}

button{
  padding: 8px;
  width: 70px;
  margin-top: 55px;
  border: 1px solid var(--primary-color);
  background-color: #3c64b1;
  color: #fff;
}
`;

const Login = () => {
  return (
    <MainWrapper>
      <div className="login">
        <p>로그인</p>
        <div className="information">
          <input type="text" className="input" value="회원아이디"></input><br></br>
          <input type="text" className="input" value="비밀번호"></input><br></br>
          <button>로그인</button>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Login;
