import React from "react";
import Styled from "styled-components";

const CommentWrapper = Styled.div`
.card{
    position: relative;
    margin-bottom: 20px;
    width: 800px;
    height: 130px;
    padding: 35px;
    background-color: ${({ theme }) => theme.colors.light_blue};
    display: flex;
    text-align: left;
    align-items: center;
  }

  .card__content_title{
      overflow: hidden;
      font-weight: bold;
  }

  .card__content_category{
      color: ${({ theme }) => theme.colors.dark_blue};
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
      color: ${({ theme }) => theme.colors.dark_blue};
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

  .profile{
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

const CommentCard = ({ comment }) => {
  return (
    <CommentWrapper>
      <div className="card">
        <div className="card__content">
          <div className="comment-writer">
            <div className="profile"></div>
            <p className="card__content_writerid">{comment.nickname}</p>
          </div>
          <p className="card__content_comment">{comment.content}</p>
        </div>
        <p className="card-information">{comment.createdDate}</p>
      </div>
    </CommentWrapper>
  );
};

export default CommentCard;
