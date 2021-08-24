import React, { useState } from "react";
import { Navbar } from "../../components";
import AuthService from "../../services/AuthService";
import { Wrapper } from "./style";

const Signup = ({ history }) => {
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

    console.log(signupInfo);

    AuthService.signUp(signupInfo).then((res) => {
      console.log(res.data);
      alert("회원가입이 완료되었습니다");
      history.push("/login");
    });
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

export default Signup;
