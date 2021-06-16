import React, { useState } from "react";
import Styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Navbar from "../components/Navbar";
import { writePost } from "../lib/api/post";
import { withRouter } from "react-router-dom";

const PostWriteWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;

  .page-title{
    font-weight: bold;
    font-size: 28px;
  }

  form{
    margin-top: 28px;
    width: 900px;
    height: 540px;
    background-color: var(--theme-color);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }

  form input {
    padding: 10px;
    height: 50px;
    border: none;
    margin-top: 18px;
    margin-right: 12px;
    font-size: 16px;
  }

  .post-form {
      display: flex;
      flex-direction: column;
      width: 760px;
      margin-top: 30px;
      margin-left: 60px;
  }

  textarea{
    margin-top: 30px;
    height: 260px;
    padding: 10px;
    resize: none;
    border: none;
    font-size: 16px;
  }

  .post-submit-btn {
    border: none;
    padding: 10px;
    width: 80px;
    height: 40px;
    background-color: var(--primary-color);
    color: #fff;
    cursor: pointer;
    position: absolute;
    right: 70px;
    bottom: 15px;
  }
`;

const useStyles = makeStyles(() => ({
  formControl: {
    width: "300px",
    backgroundColor: "#fff",
    marginTop: "20px",
  },
}));

const PostWrite = ({ history, location }) => {
  const classes = useStyles();
  const bookId = location.state.bookId;

  const [post, setPost] = useState({
    bookId: bookId,
    category: "",
    content: "",
    title: "",
    id: localStorage.getItem("userId"),
  });

  const { category, title, content } = post;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(post);
    await writePost(post);
    alert("게시글 작성이 완료되었습니다");
    history.goBack();
  };

  return (
    <>
      <Navbar />
      <PostWriteWrapper>
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
                name="category"
                value={category}
                onChange={handleInputChange}
                label="카테고리"
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
              value={title}
              className="post__title"
              name="title"
              placeholder="게시글 제목"
            />
            <textarea
              name="content"
              value={content}
              onChange={handleInputChange}
              placeholder="내용"
            />
            <button className="post-submit-btn">완료</button>
          </div>
        </form>
      </PostWriteWrapper>
    </>
  );
};

export default withRouter(PostWrite);
