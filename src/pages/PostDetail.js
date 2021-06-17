import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import CommentCard from "../components/community/CommentCard";
import Navbar from "../components/Navbar";
import { getPost } from "../lib/api/post";
import { writeComment } from "../lib/api/comment";

const PostDetailWrapper = Styled.div`
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

  .book-search{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .book-search__input{
    padding: 10px;
    width: 280px;
    height: 42px;
    border: none;
    background-color: #F3F6FA;
  }

  .book-search__btn {
    margin-left: 20px;
    padding: 10px;
    width: 64px;
    height: 40px;
  }

  .post-wrapper{
    position: relative;
    width: 800px;
    height: 230px;
    margin-top: 30px;
    margin-bottom: 60px;
    background-color: #EEF2F6;
    padding: 25px 60px;
    display: flex;
    align-items: center;
  }
  
  .post-information{
    width: 200px;
    font-size: 13px;
    text-align: left;
  }

  .post-information__book{
    font-weight: bold;
    color: #3C64B1;
    width: 400px;
    font-size: 16px;
    margin-top: 30px;
  }

  .post-information__detail{
    position: absolute;
    top: 35px;
    right: 0;
    margin-bottom: 100px;
    margin-right: 35px;
    color: #3C64B1;
  }

  .post-information__title{
    margin-top: 20px;
    font-weight: bold;
    font-size: 18px;
  }

  .post-information__content{
    width: 680px;
    height: 76px;
    font-size: 14px;
    margin-top: 6px;
    overflow: hidden;
    word-break: break-all;
  }

  .comment-wrapper{
      width: 800px;
  }

  .write-wrapper{
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

  .comment-btn{
    width: 60px;
    margin-left: 30px;
    margin-top: 50px;
  }

  button{
    border: none;
    padding: 10px;
    background-color: #3c64b1;
    color: white;
    cursor: pointer;
  }

  textarea{
    align-items: center;
    width: 640px;
    height: 98px;
    border: 0px;
    resize: none;
    padding: 10px;
  }
`;

const PostDetail = ({ location }) => {
  const postId = location.state.postInfo.postId;
  const [postInfo, setPostInfo] = useState(null);
  const [commentList, setCommentList] = useState(null);
  const [newComment, setNewComment] = useState({
    postId: postId,
    content: "",
    id: localStorage.getItem("userId"),
  });

  useEffect(() => {
    (async () => {
      const data = await getPost(postId);
      setPostInfo(data);
      setCommentList(data.commentList);
    })();
  }, [commentList]);

  const handleCommentChange = (e) => {
    setNewComment({
      ...newComment,
      content: e.target.value,
    });
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    await writeComment(newComment);
    setNewComment({
      ...newComment,
      content: "",
    });
  };

  return (
    postInfo && (
      <>
        <Navbar />
        <PostDetailWrapper>
          <div className="book-search">
            <input className="book-search__input" placeholder="도서 검색" />
            <button className="book-search__btn">검색</button>
          </div>
          <div className="post-wrapper">
            <div className="post-information">
              <div className="post-information__book">
                <p>[{postInfo.book.category}]</p>
                <p>
                  {postInfo.book.title}
                  <p>
                    {postInfo.book.author}
                    {postInfo.book.publisher}
                  </p>
                </p>
              </div>
              <p className="post-information__detail">
                {postInfo.nickname} | {postInfo.createdDate} | 댓글 수{" "}
                {postInfo.commentCount}
              </p>
              <p className="post-information__title">{postInfo.title}</p>
              <p className="post-information__content">{postInfo.content}</p>
            </div>
          </div>
          <form onSubmit={handleCommentSubmit} className="write-wrapper">
            <textarea
              value={newComment.content}
              onChange={handleCommentChange}
            />
            <button type="submit" className="comment-btn">
              등록
            </button>
          </form>
          <div className="comment-wrapper">
            {commentList?.map((comment) => (
              <CommentCard key={comment.commentId} comment={comment} />
            ))}
          </div>
        </PostDetailWrapper>
      </>
    )
  );
};

export default PostDetail;
