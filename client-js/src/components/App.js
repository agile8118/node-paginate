import React, { Component } from "react";
import axios from "axios";
import Articles from "./Articles";
import Pagination from "./Pagination";

class App extends Component {
  state = {
    articles: null,
    pagination: null,
  };

  componentDidMount() {
    this.fetch(1);
  }

  async fetch(page) {
    const { data } = await axios.get(
      `http://localhost:4080/api/articles?page=${page}`
    );

    this.setState({
      pagination: data.paginationData,
      articles: data.articlesData,
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.articles && <Articles articles={this.state.articles} />}
        {this.state.pagination && (
          <Pagination
            showingUntil={this.state.pagination.showingUntil}
            showingFrom={this.state.pagination.showingFrom}
            totalResults={this.state.pagination.totalResults}
            totalPagesNum={this.state.pagination.totalPages}
            currentPage={this.state.pagination.currentPage}
            onButtonClick={(page) => {
              window.scroll({
                top: 0,
                behavior: "smooth",
              });

              this.fetch(page);
            }}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
