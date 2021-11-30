import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import {
  Main,
  Signup,
  Login,
  Community,
  Market,
  Mypage,
  ItemDetail,
  SellWrite,
  Message,
  PostList,
  PostDetail,
  PostWrite,
  MarketHistory,
  PostHistory,
  CommentHistory,
  MessageHistory,
  NewPostWrite
} from "./pages";
import connectStore from "./hoc/connectStore";

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/community" exact component={Community} />
          <Route path="/market" exact component={Market} />
          <Route path="/mypage" exact component={Mypage} />
          <Route path="/item/:itemId" component={ItemDetail} />
          <Route path="/sell" exact component={SellWrite} />
          <Route path="/message" exact component={Message} />
          <Route path="/post" exact component={PostList} />
          <Route path="/post/:postId" exact component={PostDetail} />
          <Route path="/post-write" exact component={PostWrite} />
          <Route path="/newpost-write" exact component={NewPostWrite} />
          <Route path="/mypage/market" exact component={MarketHistory} />
          <Route path="/mypage/post" exact component={PostHistory} />
          <Route path="/mypage/comment" exact component={CommentHistory} />
          <Route path="/mypage/message" exact component={MessageHistory} />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </Router>
    </div>
  );
};

export default connectStore(App);
