import React from "react";
import Styled from "styled-components";
import { withRouter } from "react-router-dom";

const CardWrapper = Styled.div`
  .card{
    width: 350px;
    height: 260px;
    background-color: var(--theme-color);
    margin-left: 15px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card__img {
    width: 150px;
    height: 160px;
    background-color: lightgrey;
  }

  .card__content{
    display: flex;
    flex-direction: column;
    font-size: 17px;
    width: 180px;
    height: 230px;
    padding-left: 20px;
    position: relative;
  }

  .card__content > p{
    margin-top: 5px;
  }

  .card__content_date{
    font-size: 14px;
    margin-bottom: 12px;
  }

  .card__content_category,
  .card__content_title{
    font-weight: bold;
  }

  .card button{
    border: none;
    padding: 8px;
    width: 90px;
    border-radius: 20px;
    background-color: var(--primary-color);
    color: #fff;
    position: absolute;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }
`;

const CommunityCard = ({ book, history }) => {
  const handleButtonClick = () => {
    history.push({
      pathname: "/post",
      state: {
        bookId: book.bookId,
      },
    });
  };
  return (
    <CardWrapper>
      <div className="card">
        <img src={book.image} alt="" className="card__img" />
        <div className="card__content">
          <p className="card__content_date">작성일자</p>
          <p className="card__content_category">[{book.category}]</p>
          <p className="card__content_title"> {book.title}</p>
          <p className="card__content_author">{book.author}</p>
          <p className="card__content_publisher">{book.publisher}</p>
          <button onClick={handleButtonClick}>게시글보기</button>
        </div>
      </div>
    </CardWrapper>
  );
};

export default withRouter(CommunityCard);
