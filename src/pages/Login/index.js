import React, { useState } from "react";
import { Navbar } from "../../components";
import AuthService from "../../services/AuthService";
import { Wrapper } from "./style";

const Login = ({ history }) => {
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    pwd: ""
  });

  const { id, pwd } = loginInfo;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value
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
      <Wrapper>
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
      </Wrapper>
    </>
  );
};

export default Login;
