import React from "react";
import Styled from "styled-components";

const CommentWrapper = Styled.div`
.card{
    position: relative;
    margin-bottom: 20px;
    width: 800px;
    height: 130px;
    padding: 35px;
    background-color: var(--theme-color);
    display: flex;
    text-align: left;
    align-items: center;
  }

  .card__content_title{
      overflow: hidden;
      font-weight: bold;
  }

  .card__content_category{
      color: #3C64B1;
      font-size: 13px;
      font-weight: bold;
  }

  .card-information{
      position: absolute;
      right: 0;
      top: 20px;
      margin-bottom: 100px;
      margin-right: 35px;
      font-size: 13px;
      font-weight: bold;
      color: #3C64B1;
  }
  
  .card__content_writerid{
    margin-left: 10px;
    font-weight: bold;
  }

  .card__content_comment{
    margin: 15px 10px;
    width: 580px;
    max-height: 45px;
    overflow: hidden;
    word-break:break-all;
  }

  .circle{
    background: #C4C4C4;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  .comment-writer{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const CommentCard = () => {
  return (
    <CommentWrapper>
      <div className="card">
        <div className="card__content">
          <div className="comment-writer">
            <div className="circle"></div>
            <p className="card__content_writerid">작성자 ID</p>
          </div>
          <p className="card__content_comment">
            댓글 내용~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          </p>
        </div>
        <p className="card-information">작성자 ID | 작성일자</p>
      </div>
    </CommentWrapper>
  );
};

export default CommentCard;
