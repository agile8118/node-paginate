import React from "react";
import Article from "./Article";

const Articles = (props) => {
  if (!props.articles) return <div />;

  return props.articles.map((article) => {
    return (
      <Article
        key={article.id}
        image={article.image}
        title={article.title}
        author={article.author}
        date={article.date}
        body={article.body}
      />
    );
  });
};

export default Articles;
