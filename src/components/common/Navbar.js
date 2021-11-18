import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import history from "../../utils/history";
import connectStore from "../../hoc/connectStore";

const NavWrapper = Styled.div`
  background-color: ${({ theme }) => theme.colors.light_blue};
  height: 80px;
  padding: 0 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo{
    color: ${({ theme }) => theme.colors.dark_blue};
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
      color: ${({ theme }) => theme.colors.dark_blue};
    }
  }

  button{
    border: none;
    background-color:  ${({ theme }) => theme.colors.light_blue};
    padding: 10px;
  }

  button:hover{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.dark_blue};
    color: #fff;
  }
`;
const Navbar = ({ user: { user }, actions }) => {
  const { nickname, isLoggedIn } = user;
  const handleLogout = () => {
    actions.logOut();
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

export default connectStore(Navbar);
