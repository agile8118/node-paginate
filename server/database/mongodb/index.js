const mongoose = require("mongoose");
const Article = require("./models/article");
const keys = require("../../config/keys");

// Connect to the MongoDB database
mongoose.connect(
  keys.mlab_url,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Successfully connected to the MongoDB database.");
  }
);
mongoose.Promise = global.Promise;

module.exports = (DB) => {
  // Count how many documents there is in a particular collection
  DB.countDocuments = (collection) => {
    return new Promise((resolve, reject) => {
      switch (collection) {
        case "articles":
          Article.countDocuments((err, count) => {
            if (err) reject(err);
            resolve(count);
          });
          break;
        default:
          reject(`No collection with the name '${collection}' exists.`);
      }
    });
  };

  // Find the documents we need
  DB.find = (collection, query, options) => {
    return new Promise((resolve, reject) => {
      switch (collection) {
        // Right now we only have one collection - articles
        case "articles":
          Article.find(query, null, options, (err, results) => {
            if (err) reject(err);
            resolve(results);
          });
          break;
        default:
          reject(`No collection with the name '${collection}' exists.`);
      }
    });
  };
};
