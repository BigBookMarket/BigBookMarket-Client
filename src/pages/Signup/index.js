import React, { useState } from "react";
import { Navbar } from "../../components";
import connectStore from "../../hoc/connectStore";
import { Wrapper } from "./style";

const Signup = ({ actions }) => {
  const [signupInfo, setSignupInfo] = useState({
    id: "",
    nickname: "",
    pwd: "",
    phone: ""
  });

  const { id, nickname, pwd, phone } = signupInfo;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({
      ...signupInfo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !nickname || !pwd || !phone) {
      alert("입력을 확인해주세요");
    } else {
      actions.signUp(signupInfo);
    }
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="wrapper">
          <p>회원가입</p>
          <form onSubmit={handleSubmit} className="input-form">
            <input
              name="id"
              value={id}
              placeholder="회원아이디"
              onChange={handleInputChange}
            ></input>
            <input
              name="nickname"
              value={nickname}
              placeholder="닉네임"
              onChange={handleInputChange}
            ></input>
            <input
              name="pwd"
              type="password"
              value={pwd}
              placeholder="비밀번호"
              onChange={handleInputChange}
            ></input>
            <input
              name="phone"
              value={phone}
              placeholder="전화번호"
              onChange={handleInputChange}
            ></input>
            <button type="submit">가입하기</button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default connectStore(Signup);
