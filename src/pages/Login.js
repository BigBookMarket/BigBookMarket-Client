import React, { useState } from "react";
import Styled from "styled-components";
import Navbar from "../components/Navbar";
import AuthService from "../services/AuthService";

const LoginWrapper = Styled.div`
margin-top: 110px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;

.wrapper{
  padding: 16px;
  width: 460px;
}

.wrapper p:nth-child(1){
  font-size: 36px;
  font-weight: bold;
}

.input-form{
  width: 50%;
  margin: 0 auto;
  margin-top: 95px;
}

input{
  font-size: 13px;
  width: 250px;
  padding: 10px 16px;
  margin-top: 30px;
  background-color: #F3F6FA;
  color: #737B7D;
  border: 0;
  border-radius: 1.5px;
}

button{
  padding: 8px;
  width: 70px;
  margin-top: 55px;
  border: 1px solid var(--primary-color);
  background-color: #3c64b1;
  color: #fff;
  cursor: pointer;
}
`;

const Login = ({ history }) => {
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    pwd: "",
  });

  const { id, pwd } = loginInfo;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.login(loginInfo).then((res) => {
      console.log(res);
      localStorage.setItem("userNickname", res.data.nickname);
      localStorage.setItem("phone", res.data.phone);
      localStorage.setItem("userId", res.data.id);
      localStorage.setItem("authenticationToken", res.data.authenticationToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("expiresAt", res.data.expiresAt);
      history.push("/");
    });
  };

  return (
    <>
      <Navbar />
      <LoginWrapper>
        <div className="wrapper">
          <p>로그인</p>
          <form onSubmit={handleSubmit} className="input-form">
            <input
              name="id"
              onChange={handleInputChange}
              value={id}
              type="text"
              placeholder="회원아이디"
            ></input>
            <input
              name="pwd"
              onChange={handleInputChange}
              value={pwd}
              type="password"
              placeholder="비밀번호"
            ></input>
            <button type="submit">로그인</button>
          </form>
        </div>
      </LoginWrapper>
    </>
  );
};

export default Login;
