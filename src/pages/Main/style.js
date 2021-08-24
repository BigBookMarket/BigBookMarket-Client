import Styled from "styled-components";

export const Wrapper = Styled.div`
  display: flex;
  max-width: 1100px;
  margin: 120px auto;

  .intro{
    margin-left: 32px;
    padding-top: 30px;
    width: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__logo {
      margin-left: 3px;
      font-weight: bold;
      font-size: 32px;
      color: ${({ theme }) => theme.colors.dark_blue};
    }
  }

  .main-img{
    width: 600px;
    height: 380px;
  }

  .intro p:nth-child(1){
    font-size: 36px;
    color: ${({ theme }) => theme.colors.dark_blue};
  }

  .intro p:nth-child(3){
    margin-top: 40px;
    font-size: 16px;
  }

  button{
    padding: 12px;
    margin-top: 42px;
    background-color: #fff;
    color: ${({ theme }) => theme.colors.dark_blue};
    font-weight: bold;
    border: 1px solid ${({ theme }) => theme.colors.dark_blue};
  }

  button:hover{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.dark_blue};
    color: #fff;
  }

  .buttons{
    display:flex;
  }

  .community-btn{
      margin-left: 40px;
  }
`;
