import React from "react";
import Styled from "styled-components";

const PostCardWrapper = Styled.div`
width: 850px;
height: 190px;
background-color: var(--theme-color);
margin-bottom: 30px;
display: flex;
align-items: center;
position: relative;

.postHistory__info{
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 50px;
}

.postHistory_card_info{
  color: #3C64B1;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  right: 50px;
  top: 20px;
}

.postHistory__product_info{
  color: #3C64B1;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 25px;
}

.postHistory__post_title{
    font-weight: bold;
    margin-bottom: 10px;
}

.postHistory__post_content{
    overflow: hidden;
    word-break:break-all;
}
`;

const PostHistoryCard = () => {
  return (
    <PostCardWrapper>
      <div className="postHistory__info">
        <p className="postHistory__product_info">
          [카테고리] 도서명 - 저자 - 출판사, 출판일
        </p>
        <p className="postHistory__post_title">[카테고리] 게시글 제목</p>
        <p className="postHistory__post_content">
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        </p>
      </div>
      <div className="postHistory_card_info">작성일자 | 댓글 수 0</div>
    </PostCardWrapper>
  );
};

export default PostHistoryCard;
