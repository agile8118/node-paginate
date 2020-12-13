import React from "react";
import moment from "moment";

const Article = ({ image, title, author, date, body }) => {
  return (
    <div className="article">
      <div className="article__image">
        <img src={image} alt="article thumbnail" />
      </div>
      <div className="article__content">
        <div className="article__title">{title}</div>
        <div className="article__info">
          {author} . {moment(new Date(date)).fromNow()}
        </div>
        <div className="article__body">{body}</div>
      </div>
    </div>
  );
};

export default Article;
