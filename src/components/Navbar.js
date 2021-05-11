import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

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

  button{
    border: none;
    padding: 10px;
  }

  button:hover{
    cursor: pointer;
  }

  .login-btn{
    background-color: #fff;
    color: #3c64b1;
  }

  .signup-btn{
    background-color: #3c64b1;
    color: #fff;
  }
`;
const Navbar = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <div className="logo">대책마켓</div>
      </Link>
      <div className="buttons">
        <Link to="/login">
          <button className="login-btn">로그인</button>
        </Link>
        <Link to="/signup">
          <button className="signup-btn">회원가입</button>
        </Link>
      </div>
    </NavWrapper>
  );
};

export default Navbar;
