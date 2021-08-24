import React, { useEffect, useState } from "react";
import CommentCard from "../../components/community/CommentCard";
import { Navbar } from "../../components";
import { getPost } from "../../lib/api/post";
import { writeComment } from "../../lib/api/comment";
import { Wrapper } from "./style";

const PostDetail = ({ location }) => {
  const postId = location.state.postInfo.postId;
  const [postInfo, setPostInfo] = useState(null);
  const [commentList, setCommentList] = useState(null);
  const [newComment, setNewComment] = useState({
    postId: postId,
    content: "",
    id: localStorage.getItem("userId")
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
      content: e.target.value
    });
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    await writeComment(newComment);
    setNewComment({
      ...newComment,
      content: ""
    });
  };

  return (
    postInfo && (
      <>
        <Navbar />
        <Wrapper>
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
        </Wrapper>
      </>
    )
  );
};

export default PostDetail;
