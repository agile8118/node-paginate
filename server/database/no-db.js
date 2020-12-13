const fs = require("fs");
const path = require("path");

module.exports = (DB) => {
  // Count how many documents there is in a particular collection
  DB.countDocuments = (collection) => {
    return new Promise((resolve, reject) => {
      // Read the data.json file's content
      fs.readFile(path.join(__dirname + "/data.json"), (err, data) => {
        if (err) reject(err);
        resolve(JSON.parse(data)[collection].length);
      });
    });
  };

  // Find the documents we need
  DB.find = (collection, query, options) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path.join(__dirname + "/data.json"), (err, data) => {
        if (err) reject(err);
        // Gran all the records and store them in an array
        let parsedData = JSON.parse(data)[collection];

        // Sort the array based on the date - Newest first
        parsedData.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });

        // Skip and limit
        if (options)
          parsedData = parsedData.slice(
            options.skip,
            options.skip + options.limit
          );

        resolve(parsedData);
      });
    });
  };
};
