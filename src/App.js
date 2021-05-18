import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Community from "./pages/Community";
import Market from "./pages/Market";
import Mypage from "./pages/Mypage";
import Product from "./pages/Product";
import Sell from "./pages/Sell";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";
import MarketHistory from "./pages/MarketHistory";
import PostHistory from "./pages/PostHistory";
import CommentHistory from "./pages/CommentHistory";
import MessageHistory from "./pages/MessageHistory";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/community" exact component={Community} />
          <Route path="/market" exact component={Market} />
          <Route path="/mypage" exact component={Mypage} />
          <Route path="/product" exact component={Product} />
          <Route path="/sell" exact component={Sell} />
          <Route path="/post" exact component={Post} />
          <Route path="/post/detail" exact component={PostDetail} />
          <Route path="/market/history" exact component={MarketHistory} />
          <Route path="/post/history" exact component={PostHistory} />
          <Route path="/comment/history" exact component={CommentHistory} />
          <Route path="/message/history" exact component={MessageHistory} />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
