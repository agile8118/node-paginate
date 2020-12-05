/**
 * This is the Pagination component, when we initialize and call the render
 * function on it, it will put this html into the DOM:
 *
 *  <div class="pagination">
 *     <div class="pagination__links">
 *      <a class="pagination__prev pagination__link--disabled"><img src="./prev-icon.svg" /></a>
 *      <a class="pagination__page pagination__page--selected">1</a>
 *      <a href="#" class="pagination__page">2</a>
 *      <a href="#" class="pagination__page">3</a>
 *       .
 *       .
 *       .
 *      <a href="#" class="pagination__next"><img src="./next-icon.svg" /></a>
 *    </div>
 *    <span class="pagination__info">1 - 12 of 413 articles</span>
 *  </div>
 *
 */

import Articles from "./Articles.js";
import El from "../lib/El.js";
import request from "../lib/request.js";

// This will store our pagination pages
const paginationPages = (totalPagesNum, currentPage) => {
  const div = new El("div").className("pagination__pages").build();

  for (let i = 1; i <= totalPagesNum; i++) {
    div.appendChild(
      new El("a")
        .href(`${currentPage === i ? "" : "#"}`)
        .className(
          `pagination__page ${
            currentPage === i && "pagination__page--selected"
          }`
        )
        .text(i)
        .onClick(async (e) => {
          e.preventDefault();
          // We don't want anything to happen when we click on the page link
          // that we are currently in
          if (currentPage === i) return;
          // Scroll smoothly to the top
          window.scroll({
            top: 0,
            behavior: "smooth",
          });

          // Grab the new data from server
          const { articlesData, paginationData } = await request.get(
            `/api/articles?page=${i}`
          );
          // Re-render the pagination and the articles
          new Articles(articlesData).render();
          new Pagination(paginationData).render();
        })
        .build()
    );
  }

  return div;
};

class Pagination {
  constructor(data) {
    // Our pagination data
    this.data = data;
  }

  render() {
    // The previous button
    const paginationPrev = new El("a")
      .href(`${this.data.currentPage === 1 ? "" : "#"}`)
      .className(
        `pagination__prev ${
          this.data.currentPage === 1 && "pagination__link--disabled"
        }`
      )
      .onClick(async (e) => {
        e.preventDefault();
        if (this.data.currentPage === 1) return;
        // Scroll smoothly to the top
        window.scroll({
          top: 0,
          behavior: "smooth",
        });

        const { articlesData, paginationData } = await request.get(
          `/api/articles?page=${this.data.currentPage - 1}`
        );
        // Re-render the pagination and the articles
        new Articles(articlesData).render();
        new Pagination(paginationData).render();
      })
      .append(new El("img").src("./prev-icon.svg").build())
      .build();

    // The next button
    const paginationNext = new El("a")
      .href(`${this.data.totalPages === this.data.currentPage ? "" : "#"}`)
      .className(
        `pagination__next ${
          this.data.totalPages === this.data.currentPage &&
          "pagination__link--disabled"
        }`
      )
      .onClick(async (e) => {
        e.preventDefault();
        if (this.data.totalPages === this.data.currentPage) return;
        // Scroll smoothly to the top
        window.scroll({
          top: 0,
          behavior: "smooth",
        });

        const { articlesData, paginationData } = await request.get(
          `/api/articles?page=${this.data.currentPage + 1}`
        );

        // Re-render the pagination and the articles
        new Articles(articlesData).render();
        new Pagination(paginationData).render();
      })
      .append(new El("img").src("./next-icon.svg").build())
      .build();

    // The pagination info text
    const paginationInfo = new El("span")
      .className("pagination__info")
      .text(
        `${this.data.showingFrom} - ${this.data.showingUntil} of ${this.data.totalResults} articles`
      )
      .build();

    const paginationLinks = new El("div")
      .className("pagination__links")
      .append(paginationPrev)
      .append(paginationPages(this.data.totalPages, this.data.currentPage))
      .append(paginationNext)
      .build();

    const div = new El("div")
      .className("pagination")
      .append(paginationLinks)
      .append(paginationInfo)
      .build();

    // Finally put the div element we created into the DOM
    if (document.querySelector("#root").children[1])
      document.querySelector("#root").children[1].remove();
    document.querySelector("#root").appendChild(div);
  }
}

export default Pagination;
