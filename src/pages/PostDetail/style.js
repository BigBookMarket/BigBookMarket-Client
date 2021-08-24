import Styled from "styled-components";

export const Wrapper = Styled.div`
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
background-color: ${({ theme }) => theme.colors.light_blue};
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
color: ${({ theme }) => theme.colors.dark_blue};
width: 460px;
font-size: 16px;
margin-top: 30px;
}

.post-information__detail{
position: absolute;
top: 35px;
right: 0;
margin-bottom: 100px;
margin-right: 35px;
color: ${({ theme }) => theme.colors.dark_blue};
}

.post-information__title{
margin-top: 20px;
font-weight: bold;
font-size: 18px;
width: 640px;
}

.post-information__content{
width: 640px;
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
background-color: ${({ theme }) => theme.colors.light_blue};
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
background-color: ${({ theme }) => theme.colors.dark_blue};
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
