import Styled from "styled-components";

export const Wrapper = Styled.div`
margin: 110px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;

.title{
  font-size: 36px;
  font-weight: bold;
}

.toggle-buttons{
  position: relative;
  left: 400px;
  margin: 40px;
  margin-bottom: 80px;
}

.receive-btn {
  background: none;
  font-size: 14px;
  position: absolute;
  top: 12px;
  left: -130px;
  width: 70px;
  height: 44px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.dark_blue};
}

.receive-btn.clicked {
  background: ${({ theme }) => theme.colors.dark_blue};
  color: white;
  border: none;
}

.send-btn {
  background: none;
  font-size: 14px;
  position: absolute;
  top: 12px;
  left: -50px;
  width: 70px;
  height: 44px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.dark_blue};
}

.send-btn.clicked {
  background: ${({ theme }) => theme.colors.dark_blue};
  color: white;
  border: none;
}
`;
