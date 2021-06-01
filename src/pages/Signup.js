import React, { useState } from "react";
import Styled from "styled-components";
import Navbar from "../components/Navbar";
import AuthService from "../services/AuthService";

const SignupWrapper = Styled.div`
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
  margin-top: 60px;
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
  width: 80px;
  margin-top: 55px;
  border: 1px solid var(--primary-color);
  background-color: #3c64b1;
  color: #fff;
}
`;

const Signup = ({ history }) => {
  const [signupInfo, setSignupInfo] = useState({
    id: "",
    nickname: "",
    pwd: "",
    phone: "",
  });

  const { id, nickname, pwd, phone } = signupInfo;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({
      ...signupInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(signupInfo);

    AuthService.signUp(signupInfo).then((res) => {
      console.log(res.data);
      history.push("/login");
    });
  };

  return (
    <>
      <Navbar />
      <SignupWrapper>
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
      </SignupWrapper>
    </>
  );
};

export default Signup;
