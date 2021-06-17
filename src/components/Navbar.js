import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Styled from "styled-components";
import AuthService from "../services/AuthService";

const NavWrapper = Styled.div`
  background-color: var(--theme-color);
  height: 80px;
  padding: 0 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo{
    color: #3c64b1;
    font-weight: bold;
    font-size: 20px;
  }

  .logged-in-info{
    display: flex;
    align-items: center;
  }

  .welcome {
    margin-right: 10px;

    & > p {
      display: inline-block;
      font-weight: bold;
      color: var(--primary-color);
    }
  }

  button{
    border: none;
    background-color:  var(--theme-color);
    padding: 10px;
  }

  button:hover{
    cursor: pointer;
    background-color: var(--primary-color);
    color: #fff;
  }
`;
const Navbar = ({ history }) => {
  const [nickname, setNickname] = useState(
    localStorage.getItem("userNickname")
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("refreshToken") !== null
  );

  const handleLogout = () => {
    const logoutInfo = {
      id: localStorage.getItem("userId"),
      refreshToken: localStorage.getItem("refreshToken"),
    };

    AuthService.logout(logoutInfo).then((res) => {
      localStorage.removeItem("userNickname");
      localStorage.removeItem("phone");
      localStorage.removeItem("authenticationToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("expiresAt");

      setIsLoggedIn(localStorage.getItem("refreshToken") != null);

      history.push("/");
    });
  };

  return (
    <NavWrapper>
      <Link to="/">
        <div className="logo">대책마켓</div>
      </Link>
      <div className="buttons">
        {isLoggedIn ? (
          <div className="logged-in-info">
            <div className="welcome">
              <p>{nickname}</p>님
            </div>
            <button
              className="mypage-btn"
              onClick={() => history.push("/mypage")}
            >
              마이페이지
            </button>
            <button className="logout-btn" onClick={handleLogout}>
              로그아웃
            </button>
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="login-btn">로그인</button>
            </Link>
            <Link to="/signup">
              <button className="signup-btn">회원가입</button>
            </Link>
          </>
        )}
      </div>
    </NavWrapper>
  );
};

export default withRouter(Navbar);
