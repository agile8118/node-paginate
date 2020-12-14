const { DB } = require("../database");

module.exports = (app) => {
  app.get("/api/articles", async (req, res) => {
    const articles = await DB.find("articles", {});

    res.send({
      articlesData: articles,
    });
  });
};
