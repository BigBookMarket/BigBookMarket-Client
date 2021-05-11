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
import Post_detail from "./pages/Post_detail";

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
          <Route path="/post/detail" exact component={Post_detail} />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
