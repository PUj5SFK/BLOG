import React from "react";
import ReactDOM from "react-dom";
import { ArticleWrapper, WidhtWrapper } from "../style";

class Article extends React.Component {
  render() {
    return (
      <ArticleWrapper>
        <WidhtWrapper>Article</WidhtWrapper>
      </ArticleWrapper>
    );
  }
}

export default Article;
