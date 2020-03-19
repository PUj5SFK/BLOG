import React from "react";

import { GlobalStyle } from "./style.js";
import { GlobalStyleIcon } from "./statics/iconfont/iconfont";
import { Header, Home, Article, About  } from "./components";
import { HashRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/article" component={Article} />
        <Route path="/about" component={About} />
      </Router>
      <GlobalStyle />
      <GlobalStyleIcon />
    </>
  );
}

export default App;
