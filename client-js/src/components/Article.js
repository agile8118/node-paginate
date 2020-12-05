/**
 * This is the Article component, this will not put anything into
 * the DOM. It will just return a DOM element which we'll then use in the Articles component.
 */

import moment from "../lib/moment.js";
import El from "../lib/El.js";

const Article = (title, body, author, date, image) => {
  const articleImage = new El("div")
    .className("article__image")
    .append(new El("img").src(image).build())
    .build();

  const articleTitle = new El("div")
    .className("article__title")
    .text(title)
    .build();

  const articleInfo = new El("div")
    .className("article__info")
    .text(`${author} . ${moment.timeSince(new Date(date))}`)
    .build();

  const articleBody = new El("div")
    .className("article__body")
    .text(body)
    .build();

  const articleContent = new El("div")
    .className("article__content")
    .append(articleTitle)
    .append(articleInfo)
    .append(articleBody)
    .build();

  return new El("div")
    .className("article")
    .append(articleImage)
    .append(articleContent)
    .build();
};

export default Article;
