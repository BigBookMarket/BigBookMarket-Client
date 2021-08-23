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

button {
  border: none;
  padding: 10px;
  width: 80px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.dark_blue};
  color: #fff;
  cursor: pointer;
}

.modal__bg {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    position: relative;
    background-color: #fff;
    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0.5rem;
  }

  .modal__exit-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  .modal__message-btn{
    width: 150px;
  }

.message__form {
  margin-top: 28px;
  width: 900px;
  height: 540px;
  background-color: ${({ theme }) => theme.colors.light_blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

form input {
  padding: 10px;
  width: 350px;
  height: 42px;
  border: none;
}

.message__header {
  display: flex;
  justify-content: space-between;
  width: 800px;
}

textarea.message__content {
  margin-top: 16px;
  width: 800px;
  height: 350px;
  padding: 10px;
  resize: none;
  border: none;
}

.message__form button {
  position: absolute;
  right: 50px;
  bottom: 16px;
}
`;
