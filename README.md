# 📘 BigBookMarket 대책마켓

## ◻ 서비스 소개

1)&nbsp; 프로젝트 이름: 대책마켓 <br>
2)&nbsp; 설명: 대학생들을 위한 전공도서 거래 및 커뮤니티 서비스 <br>
3)&nbsp; 기간: 2021.05 ~ 2021.06

## ◻ 서비스 핵심 기능

### 1.&nbsp; 메인

<img src="https://user-images.githubusercontent.com/49135797/128663139-a5781bf1-fc20-4b74-95a4-377a72cae191.png">

◾ 도서거래 또는 커뮤니티 페이지 선택가능 <br>
◾ 로그인 및 회원가입 진행

### 2.&nbsp; 로그인 및 회원가입

<img src="https://user-images.githubusercontent.com/49135797/128663522-f9bde0c0-af44-471f-ac74-1bf93e107c66.png" width="50%"/> <img src="https://user-images.githubusercontent.com/49135797/128663481-39527f88-7ec3-467c-95fd-95a9bc386f1c.png" width="50%" />

◾ 회원가입 시 회원아이디와 닉네임, 비밀번호, 전화번호를 입력받는다.<br>
◾ 로그인 시 회원아이디와 비밀번호로 로그인할 수 있다.

### 3.&nbsp; 도서거래 페이지

**(1) 도서거래 메인페이지**
<img src="https://user-images.githubusercontent.com/49135797/128663974-b8f7bc6a-69b1-418b-8f02-a7b02bcc8031.png"/>

◾ 카테고리 별로 전공도서 판매글을 확인할 수 있고, 검색창을 통해 특정 도서를 검색할 수 있다.

**(2) 도서 상세페이지**
<img src="https://user-images.githubusercontent.com/49135797/128664268-765cc048-70b7-48ab-ae41-54222f48ccf9.png"/>

◾ 도서 선택 시 판매 정보 상세페이지를 확인할 수 있다.<br>
◾ 구매 버튼으로 판매자에게 쪽지를 보낼 수 있다.

**(3) 판매글 작성페이지**
<img src="https://user-images.githubusercontent.com/49135797/128664107-16307139-fdfc-4846-a2fc-98882239096a.png"/>

◾ 판매글을 직접 작성할 수 있다. <br>
◾ 도서를 검색하여 선택할 수 있다. (알라딘의 오픈 api 이용)

**(4) 쪽지 작성페이지**
<img src="https://user-images.githubusercontent.com/49135797/128664453-3e98f7f4-c50b-47fb-a95e-1003b5b2b002.png"/>

◾ 판매자에게 쪽지를 보낼 수 있다.

### 4. 커뮤니티페이지

**(1)커뮤니티 메인페이지**
<img src="https://user-images.githubusercontent.com/49135797/128664703-f0896c6a-cb60-4a9c-be54-a069f4b38493.png"/>

◾ 카테고리 별로 전공도서 게시글을 확인할 수 있고, 검색창을 통해 특정 도서를 검색할 수 있다.

**(2) 게시글 목록페이지**
<img src="https://user-images.githubusercontent.com/49135797/128664928-5d96c5ba-c56d-483a-9c1b-24cef09d4b20.png"/>

◾ 도서 선택 시 해당 도서 관련 게시글들을 볼 수 있는 상세페이지로 이동할 수 있다. <br>
◾ 게시글을 크게 후기, 질문, 개정, 자유 카테고리로 분류된다. <br>
◾ 게시글 또한 작성할 수 있다.

**(3) 게시글 작성페이지**
<img src="https://user-images.githubusercontent.com/49135797/128665094-9bf54bca-3e45-47aa-8bd9-df275cb0e988.png"/>

◾ 게시글을 작성할 수 있다.<br>
◾ 게시글 카테고리는 크게 후기, 질문, 개정, 자유 4가지 중에 선택하여 작성할 수 있다.

**(4) 게시글 상세페이지**
<img src="https://user-images.githubusercontent.com/49135797/128665198-37c96c1e-840e-4e56-82d6-4001bfb3d685.png"/>

◾ 선택한 게시글의 댓글 목록을 확인할 수 있고, 바로 댓글을 작성할 수도 있다.

### 5. 마이페이지

<img src="https://user-images.githubusercontent.com/49135797/128664574-77cd71d3-ef1f-48a7-8086-29fe435db124.png"/>

◾ 마이페이지에서 개인정보 수정 및 거래내역, 게시물, 댓글, 쪽지 내역을 확인할 수 있다.

## ◻ 기술 스택 및 라이브러리

```
"@material-ui/core": "^4.11.4",
"@testing-library/jest-dom": "^5.11.4",
"@testing-library/react": "^11.1.0",
"@testing-library/user-event": "^12.1.10",
"axios": "^0.21.1",
"http-proxy-middleware": "^2.0.0",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-redux": "^7.2.4",
"react-router-dom": "^5.2.0",
"react-scripts": "4.0.3",
"redux": "^4.1.1",
"redux-thunk": "^2.3.0",
"styled-components": "^5.2.3",
"web-vitals": "^1.0.1"
```

## ◻ 코딩 컨벤션

`master` 브랜치를 중심으로, 자신의 깃허브 닉네임으로 된 브랜치로 작업

```
feat : 새로운 기능 추가
fix : 버그 수정
docs : 문서 추가 및 변경
style : 코드 포맷팅, 로직의 변화는 없이 띄어쓰기나 탭 문자 등의 사소한 변화
refactor : 리팩토링
test : 테스트 코드 수정 및 변경
chore : 그 외 사소한 변경
```

## ◻ 프로젝트 구조

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂images
 ┃ ┣ 📂styles
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┣ 📂community
 ┃ ┣ 📂market
 ┃ ┣ 📂mypage
 ┃ ┣ 📜index.js
 ┣ 📂const
 ┣ 📂data
 ┃ ┣ 📂community
 ┃ ┣ 📂market
 ┃ ┣ 📂message
 ┃ ┣ 📂user
 ┃ ┣ 📜rootActions.js
 ┃ ┣ 📜rootActionTypes.js
 ┃ ┣ 📜rootReducer.js
 ┃ ┣ 📜rootServices.js
 ┣ 📂hoc
 ┣ 📂pages
 ┃ ┣ 📂CommentHistory
 ┃ ┣ 📂Community
 ┃ ┣ 📂Login
 ┃ ┣ 📂Main
 ┃ ┣ 📂Market
 ┃ ┣ 📂MarketHistory
 ┃ ┣ 📂Message
 ┃ ┣ 📂MessageHistory
 ┃ ┣ 📂Mypage
 ┃ ┣ 📂NewPostWrite
 ┃ ┣ 📂PostDetail
 ┃ ┣ 📂PostHistory
 ┃ ┣ 📂PostList
 ┃ ┣ 📂PostWrite
 ┃ ┣ 📂ItemDetail
 ┃ ┣ 📂SellWrite
 ┃ ┣ 📂Signup
 ┃ ┣ 📜index.js
 ┣ 📂store
 ┣ 📂utils
 ┣ 📜App.js
 ┣ 📜index.js
 ┣ 📜setupProxy.js
```

## ◻ 서비스 시연 영상

[▶ 영상보기](https://drive.google.com/file/d/1twc8AIjgCsVqjKTnLQsVKf-TsIj2tvua/view?usp=sharing)
