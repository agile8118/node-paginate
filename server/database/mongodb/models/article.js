const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  title: String,
  image: String,
  body: String,
  author: String,
  date: { type: Date, default: Date.now },
});

const Article = mongoose.model("Article", articleSchema, "articles");

module.exports = Article;
