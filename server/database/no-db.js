const fs = require("fs");
const path = require("path");

module.exports = (DB) => {
  // Count how many documents there is in a particular collection
  DB.countDocuments = (collection) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path.join(__dirname + "/data.json"), (err, data) => {
        if (err) reject(err);
        resolve(JSON.parse(data)[collection].length);
      });
    });
  };

  DB.find = (collection, query, options) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path.join(__dirname + "/data.json"), (err, data) => {
        if (err) reject(err);
        let parsedData = JSON.parse(data)[collection];

        parsedData.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });

        parsedData = parsedData.slice(
          options.skip,
          options.skip + options.limit
        );

        resolve(parsedData);
      });
    });
  };
};
