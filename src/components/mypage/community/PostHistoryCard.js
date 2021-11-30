import React from "react";
import Styled from "styled-components";
import history from "../../../utils/history";
import connectStore from "../../../hoc/connectStore";

const PostCardWrapper = Styled.div`
width: 850px;
height: 190px;
background-color: ${({ theme }) => theme.colors.light_blue};;
margin-bottom: 30px;
display: flex;
align-items: center;
position: relative;

.card__info{
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 50px;
}

.card__post_date{
  color: ${({ theme }) => theme.colors.dark_blue};
  font-size: 14px;
  position: absolute;
  right: 50px;
  top: 30px;
}

.card__book_info{
  color: ${({ theme }) => theme.colors.dark_blue};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;
}

.card__post_title{
    font-weight: bold;
    margin-bottom: 10px;
}

.card__post_content{
    overflow: hidden;
    word-break:break-all;
    width: 700px;
    height: 54px;
}

.card__buttons{
  display: flex;
  color: ${({ theme }) => theme.colors.dark_blue};
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  right: 46px;
  bottom: 30px;

  & > p:nth-child(2n+1) {
    cursor: pointer;
  }
}
`;

const PostHistoryCard = ({ actions, post }) => {
  const showCategory = () => {
    switch (post.category) {
      case "QUESTION":
        return "질문";
      case "REVIEW":
        return "후기";
      case "REVISION":
        return "개정";
      case "FREE":
        return "자유";
      default:
        return;
    }
  };

  const handleModify = () => {
    history.push({
      pathname: "/post-write",
      state: {
        bookInfo: post,
        isEdit: true
      }
    });
  };
  const handleDelete = () => {
    actions.deletePost(post.postId);
  };
  return (
    <PostCardWrapper>
      <div className="card__info">
        <p className="card__book_info">
          [{post.book.category}] {post.book.title}
          <p>
            {post.book.author} - {post.book.publisher}
          </p>
        </p>
        <p className="card__post_title">
          [{showCategory()}] {post.title}
        </p>
        <p className="card__post_content">{post.content}</p>
      </div>
      <div className="card__post_date">
        {post.createdDate} | 댓글 수 {post.commentCount}
      </div>
      <div className="card__buttons">
        <p className="card__buttons_modify" onClick={handleModify}>
          수정하기
        </p>
        <p>&nbsp;|&nbsp;</p>
        <p className="card__buttons_delete" onClick={handleDelete}>
          삭제하기
        </p>
      </div>
    </PostCardWrapper>
  );
};

export default connectStore(PostHistoryCard);
