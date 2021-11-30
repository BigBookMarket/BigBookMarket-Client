import React, { useState } from "react";
import { Navbar } from "../../components";
import { Wrapper } from "./style";
import connectStore from "../../hoc/connectStore";

const Login = ({ actions }) => {
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
    actions.logIn(loginInfo);
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

export default connectStore(Login);
