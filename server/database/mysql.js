const mysql = require("mysql");
const keys = require("../config/keys");

let connection = mysql.createConnection(keys.mysql_url);

connection.connect((e) => {
  if (e) throw e;
  console.log("Successfully connected to the MySQL database.");
});

// Create articles table
connection.query(
  `CREATE TABLE IF NOT EXISTS articles (
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
      image VARCHAR(200) NOT NULL,
      title VARCHAR(200) NOT NULL,
      body VARCHAR(200) NOT NULL,
      author VARCHAR(200) NOT NULL,
      date TIMESTAMP DEFAULT NOW() NOT NULL
   );`,
  (e, result) => {
    if (e) throw e;
  }
);

module.exports = (DB) => {
  // Count how many documents there is in a particular collection
  DB.countDocuments = (table) => {
    return new Promise((resolve, reject) => {
      let query = `SELECT COUNT(*) AS count FROM ${table}`;
      connection.query(query, (e, result) => {
        if (e) {
          reject(e);
        }
        resolve(result[0].count);
      });
    });
  };
};
