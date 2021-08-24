import Styled from "styled-components";

export const Wrapper = Styled.div`
margin: 110px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;

.wrapper{
  padding: 16px;
  width: 800px;
}

.bold{
  font-size: 36px;
  font-weight: bold;
}

.user-information{
  height: 170px;
  margin-top: 30px;
  margin-bottom: 60px;
  background-color: ${({ theme }) => theme.colors.light_blue};
  padding: 20px 60px;
  display: flex;
}

.img{
  width: 125px;
  height: 130px;
  background-color: #C4C4C4;
}

.text-information{
  width: 300px;
  font-size: 16px;
  color: #737B7D;
  margin-left: 70px;
  margin-top: 10px;
  text-align: left;
}

p{
  margin-bottom: 20px;
}

button{
  padding: 8px;
  height: 40px;
  width: 85px;
  margin-top: 80px;
  margin-left: 50px;
  border: 1px solid ${({ theme }) => theme.colors.dark_blue};
  background-color: ${({ theme }) => theme.colors.dark_blue};
  color: #fff;
  cursor: pointer;
}

.block-wrapper{
  display: flex;
  flex-wrap: wrap;
}

.block-wrapper div:nth-child(2n){
  margin-left: 20px;
}

.block{
  margin: 10px 0;
  height: 270px;
  width: 370px;
  background: ${({ theme }) => theme.colors.light_blue};
  border-radius: 25px;
}

.block p:nth-child(n){
  font-weight: bold;
  font-size: 35px;
  color: #737B7D;
  margin-top: 40px;
  margin-left: 50px;
  text-align: left;
}

.block button:nth-child(n){
  margin-top: 90px;
  margin-left: 200px;
  font-weight: bold;
}
`;
