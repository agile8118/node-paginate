/**
 * This file will be used to generate seed data into our database.
 * It can save the data to either MySQL, MongoDB or a file.
 */

const readline = require("readline");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios");
const Article = require("./models/article");
const keys = require("../config/keys");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (input) => {
      resolve(input);
    });
  });
}

function random(obj) {
  const number = Math.floor(Math.random() * 10);
  return obj[number];
}

(async () => {
  console.log("Grabbing the seed data from the internet...");

  const usersRes = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  const postsRes = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const users = usersRes.data;
  const posts = postsRes.data;

  const data = posts.map((post) => {
    return {
      title: post.title,
      body: post.body,
      author: random(users).name,
      image: `https://picsum.photos/192/120?random=${Math.floor(
        Math.random() * 10
      )}`,
      date: new Date(new Date() - Math.floor(Math.random() * 10000000000)),
    };
  });

  const chosenDB = await ask(
    "What database you want to use? [mysql, mongodb, none] \n"
  );

  switch (chosenDB) {
    case "none":
      console.log(
        "No database will be used. Data will be saved in /server/database/data.json file."
      );
      fs.writeFile(
        path.join(__dirname + "/data.json"),
        JSON.stringify({ articles: data }),
        () => {
          console.log(
            data.length + " records has been saved to the data.json file..."
          );
          rl.close();
          process.exit(0);
        }
      );
      break;
    case "mysql":
      console.log("MySQL database will be used.");
      const mysql = require("mysql");
      let connection = mysql.createConnection(keys.mysql_url);

      let dropOrNot = await ask(
        "Do you want to first delete all the existing records and then add the seed data? [yes, no] \n"
      );
      if (dropOrNot !== "no") {
        connection.query(`DROP TABLE  articles;`, (e, result) => {
          if (e) throw e;
        });
        console.log("Articles table has been removed...");
      }

      // Create articles table
      connection.query(
        `CREATE TABLE IF NOT EXISTS articles (
          id INTEGER AUTO_INCREMENT PRIMARY KEY,
          image VARCHAR(200) NOT NULL,
          title VARCHAR(200) NOT NULL,
          body TEXT NOT NULL,
          author VARCHAR(200) NOT NULL,
          date TIMESTAMP DEFAULT NOW() NOT NULL
       );`,
        (e, result) => {
          if (e) throw e;
        }
      );

      let values = "";
      data.map((d) => {
        values =
          values +
          `("${d.image}", "${d.title}", "${d.body}", "${d.author}", "${
            d.date.toISOString().split("T")[0]
          }"),`;
      });
      values = values.slice(0, -1);
      const query = `INSERT INTO 
                      articles (image, title, body, author, date) 
                      VALUES 
                      ${values}`;
      connection.query(query, function (error, result) {
        if (error) throw error;
        console.log(
          data.length + " records has been saved to the articles table."
        );
        rl.close();
        process.exit(0);
      });

      break;
    case "mongodb":
      console.log("MongoDB database will be used.");
      mongoose.connect(keys.mlab_url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      dropOrNot = await ask(
        "Do you want to first delete all the existing records and then add the seed data? [yes, no] \n"
      );
      if (dropOrNot !== "no") {
        Article.collection.drop();
        console.log("Articles collection has been removed...");
      }
      try {
        await Article.insertMany(data);
        console.log(
          data.length + " records has been saved to the articles collection."
        );
      } catch (e) {
        console.log(e);
      }
      rl.close();
      mongoose.connection.close();
      break;
    default:
      console.log("No valid option was chosen.");
      rl.close();
      process.exit(0);
  }
})();
