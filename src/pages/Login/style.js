import Styled from "styled-components";

export const Wrapper = Styled.div`
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
  margin-top: 95px;
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
  width: 70px;
  margin-top: 55px;
  border: 1px solid ${({ theme }) => theme.colors.dark_blue};
  background-color: ${({ theme }) => theme.colors.dark_blue};
  color: #fff;
  cursor: pointer;
}
`;
