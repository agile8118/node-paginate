/**
 * This file will be used to generate seed data into our database.
 * It can save the data to either MySQL, MongoDB or a file.
 */

const readline = require("readline");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Article = require("./mongodb/models/article");
const mysql = require("mysql");
const axios = require("axios");
const keys = require("../config/keys");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// It will ask a question in the terminal.
// it returns a promise which will contain the answer
function ask(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (input) => {
      resolve(input);
    });
  });
}

// Will return an item of an array randomly
function random(arr) {
  const number = Math.floor(Math.random() * 10); // a number from 0 to 9
  return arr[number];
}

(async () => {
  console.log("Grabbing the seed data from the internet...");

  // Grab the user data
  const usersRes = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  // Grab the posts data -
  const postsRes = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const users = usersRes.data; // An array that contains 10 users
  const posts = postsRes.data; // An array that contains 100 posts

  // Populate a formatted data object that we'll need
  const data = posts.map((post) => {
    return {
      title: post.title,
      body: post.body,
      author: random(users).name,
      image: `https://picsum.photos/192/120?random=${Math.floor(
        Math.random() * 10
      )}`,
      // A random date
      date: new Date(new Date() - Math.floor(Math.random() * 10000000000)),
    };
  });

  const chosenDB = await ask(
    "What database you want to use? [mysql, mongodb, none] \n"
  );

  let dropOrNot;
  // Set up the database now...
  switch (chosenDB) {
    // In case we don't want to use any database
    case "none":
      console.log(
        "No database will be used. Data will be saved in /server/database/data.json file..."
      );

      // This will override the file every single time (so it will always contain 100 records)
      fs.writeFile(
        path.join(__dirname + "/data.json"),
        JSON.stringify({ articles: data }),
        () => {
          console.log(
            data.length + " records has been saved to the data.json file."
          );
          rl.close();
          process.exit(0);
        }
      );
      break;
    // In case we don't want to use MySQL
    case "mysql":
      console.log("MySQL database will be used.");
      let connection = mysql.createConnection(keys.mysql_url);

      // Drop the table first if specified (we might want to start fresh), if we don't drop,
      // every time we run the file we'll insert 100 new records into the database
      dropOrNot = await ask(
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

      // Now insert all the data into the articles table
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
    // In case we want to use MongoDB
    case "mongodb":
      console.log("MongoDB database will be used.");
      mongoose.connect(keys.mlab_url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });

      // Drop the table first if specified (we might want to start fresh), if we don't drop,
      // every time we run the file we'll insert 100 new records into the database
      dropOrNot = await ask(
        "Do you want to first delete all the existing records and then add the seed data? [yes, no] \n"
      );
      if (dropOrNot !== "no") {
        Article.collection.drop();
        console.log("Articles collection has been removed...");
      }

      // Now insert all the data into the articles collection
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
