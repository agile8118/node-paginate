const DB = {};

if (process.env.DATABASE === "mongodb") {
  require("./mongodb")(DB);
}

if (process.env.DATABASE === "mysql") {
  require("./mysql")(DB);
}

module.exports = { DB };
