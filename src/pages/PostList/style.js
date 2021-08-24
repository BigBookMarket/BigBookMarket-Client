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

.book-wrapper{
width: 800px;
height: 230px;
margin-top: 30px;
margin-bottom: 60px;
background-color: ${({ theme }) => theme.colors.light_blue};
padding: 25px 60px;
display: flex;
position: relative;
}

.img{
width: 180px;
height: 180px;
background-color: #C4C4C4;
}

.book-information{
width: 400px;
font-size: 16px;
margin-left: 48px;
text-align: left;
}

.information__category{
font-weight: bold;
margin-top: 10px;
}

.information__title{
font-weight: bold;
}

.information__author{
margin-top: 20px;
}

.information__date{
margin-top: 10px;
width: 100px;
font-size: 13px;
}

.post__btn {
padding: 8px;
height: 40px;
width: 120px;
font-size: 12px;
position: absolute;
right: 20px;
bottom: 20px;
}

.post-wrapper{
  width: 800px;
}

button{
border: none;
padding: 10px;
background-color: ${({ theme }) => theme.colors.dark_blue};
color: white;
cursor: pointer;
}
`;
