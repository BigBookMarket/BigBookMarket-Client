import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Navbar } from "../../components";
import { updatePost, writePost } from "../../lib/api/post";
import { withRouter } from "react-router-dom";
import { Wrapper } from "./style";

const useStyles = makeStyles(() => ({
  formControl: {
    width: "300px",
    backgroundColor: "#fff",
    marginTop: "20px"
  }
}));

const PostWrite = ({ history, location }) => {
  const classes = useStyles();
  const bookInfo = location.state.bookInfo;

  const [post, setPost] = useState({
    postCategory: "",
    postTitle: "",
    postContent: ""
  });

  const { postCategory, postTitle, postContent } = post;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location.state.isEdit) {
      const updatedPostData = {
        content: post.postContent,
        title: post.postTitle
      };
      await updatePost(bookInfo.postId, updatedPostData);
    } else {
      const postData = {
        book: {
          bookId: bookInfo.bookId,
          title: bookInfo.title,
          author: bookInfo.author,
          category: bookInfo.category,
          publisher: bookInfo.publisher,
          pubDate: bookInfo.pubDate,
          priceStandard: bookInfo.priceStandard,
          image: bookInfo.image
        },
        category: post.postCategory,
        title: post.postTitle,
        content: post.postContent,
        id: localStorage.getItem("userId")
      };
      await writePost(postData);
    }
    history.goBack();
  };

  useEffect(() => {
    if (location.state.isEdit) {
      setPost({
        postCategory: bookInfo.category,
        postTitle: bookInfo.title,
        postContent: bookInfo.content
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="page-title">게시글 작성하기</div>
        <form onSubmit={handleSubmit}>
          <div className="post-form">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                게시글 카테고리
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="postCategory"
                value={postCategory}
                onChange={handleInputChange}
                label="카테고리"
                readOnly={location.state.isEdit ? true : false}
              >
                <MenuItem value="QUESTION">
                  <em>질문</em>
                </MenuItem>
                <MenuItem value="REVIEW">
                  <em>후기</em>
                </MenuItem>
                <MenuItem value="REVISION">
                  <em>개정</em>
                </MenuItem>
                <MenuItem value="FREE">
                  <em>자유</em>
                </MenuItem>
              </Select>
            </FormControl>

            <input
              onChange={handleInputChange}
              value={postTitle}
              className="post__title"
              name="postTitle"
              placeholder="게시글 제목"
            />
            <textarea
              name="postContent"
              value={postContent}
              onChange={handleInputChange}
              placeholder="내용"
            />
            <button className="post-submit-btn">완료</button>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default withRouter(PostWrite);
