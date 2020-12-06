/**
 * The DB object will have different methods depending upon what
 * type of database we want to use. Note that those methods will have
 * the same name, and the same return type and parameters.
 *
 *
 * As of now this object will have these methods on it:
 *
 *  @param {string} collection (or the table name)
 *  @returns {promise} will contain a number of how many documents we have
 *  - DB.countDocuments
 *
 *  @param {string} collection (or the table name)
 *  @param {object} query contains what should be found, passing an empty object means to find all
 *  @param {object} options about how to find those records - sorting, limiting, skipping
 *  @returns {promise} will contain an array with all the records found
 *  - DB.find
 *
 * If you want to add more methods or enhance these methods make sure to update
 * all of these files: mysql.js mongodb.js no-db.js
 */
const DB = {};

// If we don't have a valid database type, just return an error and exit out of the app
if (["mongodb", "mysql", "none"].indexOf(process.env.DATABASE) === -1) {
  console.error("Please specify the right database to use for the app.");
  process.exit(0);
}

if (process.env.DATABASE === "mongodb") {
  require("./mongodb")(DB);
}

if (process.env.DATABASE === "mysql") {
  require("./mysql")(DB);
}

if (process.env.DATABASE === "none") {
  require("./no-db")(DB);
}

module.exports = { DB };
