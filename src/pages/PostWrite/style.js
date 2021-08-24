import Styled from "styled-components";

export const Wrapper = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 48px;

.page-title{
  font-weight: bold;
  font-size: 28px;
}

form{
  margin-top: 28px;
  width: 900px;
  height: 540px;
  background-color: ${({ theme }) => theme.colors.light_blue};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}

form input {
  padding: 10px;
  height: 50px;
  border: none;
  margin-top: 18px;
  margin-right: 12px;
  font-size: 16px;
}

.post-form {
    display: flex;
    flex-direction: column;
    width: 760px;
    margin-top: 30px;
    margin-left: 60px;
}

textarea{
  margin-top: 30px;
  height: 260px;
  padding: 10px;
  resize: none;
  border: none;
  font-size: 16px;
}

.post-submit-btn {
  border: none;
  padding: 10px;
  width: 80px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.dark_blue};
  color: #fff;
  cursor: pointer;
  position: absolute;
  right: 70px;
  bottom: 15px;
}
`;
