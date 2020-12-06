const mongoose = require("mongoose");
const Article = require("./models/article");
const keys = require("../config/keys");

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
};
