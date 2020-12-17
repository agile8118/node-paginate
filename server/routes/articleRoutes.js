const { DB } = require("../database");

module.exports = (app) => {
  app.get("/api/articles", async (req, res) => {
    const perPage = 12;
    const page = parseInt(req.query.page);
    const totalArticlesLen = await DB.countDocuments("articles");
    const totalPages = Math.ceil(totalArticlesLen / perPage);

    const articles = await DB.find(
      "articles",
      {},
      { sort: { date: true }, skip: perPage * (page - 1), limit: perPage }
    );

    let fromPage, untilPage;

    fromPage = page === 1 ? 1 : page - 1;
    untilPage = fromPage + 5;

    if (untilPage > totalPages) {
      untilPage = totalPages;
      fromPage = untilPage - 5;
    }

    res.send({
      articlesData: articles,
      paginationData: {
        totalPages,
        fromPage,
        untilPage,
        currentPage: page,
        totalResults: totalArticlesLen,
        showingFrom: perPage * (page - 1) + 1,
        showingUntil:
          perPage * page > totalArticlesLen ? totalArticlesLen : perPage * page,
      },
    });
  });
};
