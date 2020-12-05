import Articles from "./components/Articles.js";
import Pagination from "./components/Pagination.js";
import request from "./lib/request.js";

class App {
  constructor() {
    // Our pagination data
    this.pagination = null;
    // Our articles data
    this.articles = null;
  }

  // Fetch the articles from the server
  async fetch(cb) {
    const { articlesData, paginationData } = await request.get(
      "/api/articles?page=1"
    );

    this.articles = articlesData;
    this.pagination = paginationData;

    cb();
  }

  /**
   * Maybe I should name this function something else because the render function
   * on our other classes will put something into the DOM. But his function will just
   * initialize and call the render function on the other classes.
   */
  render() {
    this.fetch(() => {
      /**
       * Notice that the order here doesn't matter, if we want it work like React,
       * we have to set up a virtual DOM and then have another object which it's purpose
       * will be to get the virtual DOM and then put that into the DOM (ReactDOM job is actually just that).
       * Virtual DOM is just any representation of the DOM elements, for that we can use JSX to
       * make our job easier and actually doing that is way easier than what you might think!
       */
      new Articles(this.articles).render();
      new Pagination(this.pagination).render();
    });
  }
}

new App().render();
