/**
 * This is the Pagination component, when we initialize and call the render
 * function on it, it will put this html into the DOM:
 *
 *  <div class="pagination">
 *     <div class="pagination__buttons">
 *      <button class="pagination__prev pagination__button--disabled"><img src="./prev-icon.svg" /></button>
 *      <button class="pagination__page pagination__page--selected">1</a>
 *      <button class="pagination__page">2</a>
 *      <button class="pagination__page">3</a>
 *       .
 *       .
 *       .
 *      <button class="pagination__next"><img src="./next-icon.svg" /></button>
 *    </div>
 *    <span class="pagination__info">1 - 12 of 413 articles</span>
 *  </div>
 *
 */

import Articles from "./Articles.js";
import El from "../lib/El.js";
import request from "../lib/request.js";

class Pagination {
  constructor(data) {
    // Our pagination data
    this.totalPages = data.totalPages;
    this.currentPage = data.currentPage;
    this.totalResults = data.totalResults;
    this.showingFrom = data.showingFrom;
    this.showingUntil = data.showingUntil;
  }

  // Sends a request to server to grab the new pagination and articles
  // data and then re-renders the components
  async fetchAndRender(page) {
    // Scroll smoothly to the top
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

    const { articlesData, paginationData } = await request.get(
      `/api/articles?page=${page}`
    );

    // Re-render the pagination and the articles
    new Articles(articlesData).render();
    new Pagination(paginationData).render();
  }

  // This will populate and return our pagination pages
  renderPaginationPages() {
    const div = new El("div").className("pagination__pages").build();
    for (let i = 1; i <= this.totalPages; i++) {
      div.appendChild(
        new El("button")
          .className(
            `pagination__page ${
              this.currentPage === i ? "pagination__page--selected" : ""
            }`
          )
          .text(i)
          .disabled(this.currentPage === i)
          .onClick(async (e) => {
            e.preventDefault();
            // We don't want anything to happen when we click on the page button
            // that represents the page number that we are currently on
            if (this.currentPage === i) return;
            this.fetchAndRender(i);
          })
          .build()
      );
    }
    return div;
  }

  render() {
    // The previous button
    const paginationPrev = new El("button")
      .className(
        `pagination__prev ${
          this.currentPage === 1 ? "pagination__button--disabled" : ""
        }`
      )
      .disabled(this.currentPage === 1)
      .onClick(async (e) => {
        e.preventDefault();
        if (this.currentPage === 1) return;
        this.fetchAndRender(this.currentPage - 1);
      })
      .append(new El("img").src("./prev-icon.svg").build())
      .build();

    // The next button
    const paginationNext = new El("button")
      .className(
        `pagination__next ${
          this.totalPages === this.currentPage
            ? "pagination__button--disabled"
            : ""
        }`
      )
      .disabled(this.totalPages === this.currentPage)
      .onClick(async (e) => {
        e.preventDefault();
        if (this.totalPages === this.currentPage) return;
        this.fetchAndRender(this.currentPage + 1);
      })
      .append(new El("img").src("./next-icon.svg").build())
      .build();

    // The pagination info text
    const paginationInfo = this.totalResults
      ? new El("span")
          .className("pagination__info")
          .text(
            `${this.showingFrom} - ${this.showingUntil} of ${this.totalResults} articles`
          )
          .build()
      : null;

    // All pagination buttons
    const paginationButtons = new El("div")
      .className("pagination__buttons")
      .append(paginationPrev)
      .append(this.renderPaginationPages())
      .append(paginationNext)
      .build();

    // The final pagination element
    const div = new El("div")
      .className("pagination")
      .append(paginationButtons)
      .append(paginationInfo)
      .build();

    // Finally put the div element we created into the DOM
    if (document.querySelector("#root").children[1])
      document.querySelector("#root").children[1].remove();
    document.querySelector("#root").appendChild(div);
  }
}

export default Pagination;
