import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Community from "./pages/Community";
import Market from "./pages/Market";
import Mypage from "./pages/Mypage";
import Product from "./pages/Product";
import Sell from "./pages/Sell";
import Message from "./pages/Message";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";
import PostWrite from "./pages/PostWrite";
import MarketHistory from "./pages/MarketHistory";
import PostHistory from "./pages/PostHistory";
import CommentHistory from "./pages/CommentHistory";
import MessageHistory from "./pages/MessageHistory";
import NewPostWrite from "./pages/NewPostWrite";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/community" exact component={Community} />
          <Route path="/market" exact component={Market} />
          <Route path="/mypage" exact component={Mypage} />
          <Route path="/product/:productid" component={Product} />
          <Route path="/sell" exact component={Sell} />
          <Route path="/message" exact component={Message} />
          <Route path="/post" exact component={Post} />
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

export default App;
