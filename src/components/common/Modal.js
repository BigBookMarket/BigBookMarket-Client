import styled from "styled-components";
import connectStore from "../../hoc/connectStore";
import history from "../../utils/history";

const Wrapper = styled.div`
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

  .modal__message-btn {
    width: 150px;
    padding: 8px;
    border: none;
    background-color: ${({ theme }) => theme.colors.dark_blue};
    color: #fff;
    cursor: pointer;
  }
`;

const Modal = ({ modal, actions }) => {
  if (!modal.open) return null;

  const handleMessageClick = () => {
    history.push({
      pathname: "/message",
      state: {
        fromHistory: false
      }
    });
    actions.closeModal();
  };
  const handleExitClick = () => {
    actions.closeModal();
  };
  return (
    <Wrapper>
      <div className="modal__bg">
        <div className="modal">
          <h1>구매신청이 완료되었습니다</h1>
          <button onClick={handleMessageClick} className="modal__message-btn">
            판매자와 쪽지하기
          </button>
          <div onClick={handleExitClick} className="modal__exit-btn">
            X
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default connectStore(Modal);
