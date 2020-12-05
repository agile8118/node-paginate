/**
 * This is the Articles component, when we initialize and call the render
 * function on it, it will put this html into the DOM :
 *
 *  <div class="article">
 *   <div class="article__image"><img src="https://picsum.photos/192/120?random=1"></div>
 *   <div class="article__content">
 *     <div class="article__title">This is some text here and here and more and more</div>
 *     <div class="article__info">John Doe . 4 days ago</div>
 *     <div class="article__body">Some text here and more and more and more...</div>
 *   </div>
 *  </div>
 *
 */

import Article from "./Article.js";
import El from "../lib/El.js";

export default class Articles {
  constructor(articles) {
    // The articles data
    this.articles = articles;
  }

  render() {
    // Create a parent div which we'll then put what we need on it
    // and finally put it into the DOM.
    const div = new El("div").build();
    this.articles.forEach((obj) => {
      // Create a new article element.
      const article = Article(
        obj.title,
        obj.body,
        obj.author,
        obj.date,
        obj.image
      );

      div.appendChild(article);
    });

    // Because the Articles component will be the first child element
    // of the root div element, we first check to see if we have it or not.
    if (document.querySelector("#root").children[0]) {
      // Add our div element after our already existed component.
      document
        .querySelector("#root")
        .children[0].parentNode.insertBefore(
          div,
          document.querySelector("#root").children[0].nextSibling
        );
      // Then remove the old component from the DOM.
      document.querySelector("#root").children[0].remove();
    } else {
      // If this component hasn't already been rendered, just put it to the DOM.
      document.querySelector("#root").appendChild(div);
    }
  }
}
