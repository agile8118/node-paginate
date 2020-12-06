const DB = {};

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
