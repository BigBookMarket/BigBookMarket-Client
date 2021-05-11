import React from "react";
import Styled from "styled-components";

const PostWrapper = Styled.div`
.card{
    position: relative;
    margin-bottom: 20px;
    width: 800px;
    height: 150px;
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

  .card__content_content{
    width: 580px;
    height: 65px;
    overflow: hidden;
    word-break:break-all;
  }

  .card-information{
      position: absolute;
      right: 0;
      margin-bottom: 100px;
      margin-right: 35px;
      font-size: 13px;
      font-weight: bold;
      color: #3C64B1;
  }
`;

const PostCard = () => {
  return (
    <PostWrapper>
      <div className="card">
        <div className="card__content">
          <p className="card__content_category">[카테고리]</p>
          <p className="card__content_title">게시글 제목</p>
          <p className="card__content_content">
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          </p>
        </div>
        <p className="card-information">작성자 ID | 작성일자 | 댓글 수 0</p>
      </div>
    </PostWrapper>
  );
};

export default PostCard;
