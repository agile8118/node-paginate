(async () => {
  const express = require("express");
  const path = require("path");
  const bodyParser = require("body-parser");
  const cors = require("cors");
  const readline = require("readline"); // will be used to get input from the command line

  const app = express();
  const publicPath = path.join(__dirname, "../public");
  const port = process.env.PORT || 4080;

  app.use(cors());
  app.use(express.static(publicPath));
  app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));

  const rl = readline.createInterface({
    input: process.stdin, // Standard input
    output: process.stdout, // Standard output
  });

  // Ask in the command line for the database type if not specified
  if (!process.env.DATABASE) {
    process.env.DATABASE = await ((question) => {
      return new Promise((resolve, reject) => {
        rl.question(question, (input) => {
          resolve(input);
        });
      });
    })("What database you want to use? [mysql, mongodb, none] \n");

    // Close the read line once we are done, if we don't do it then
    // we have to run ctrl + c twice in order to shutdown the server
    rl.close();
  }

  // This file will handle all the database related stuff
  require("./database");

  // Show the home page
  app.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname + "/../public" });
  });

  // API Routes
  require("./routes/articleRoutes")(app);

  // Sends 404 page
  app.get("*", (req, res) => {
    res.sendFile("404.html", { root: __dirname + "/../public" });
  });

  app.listen(port, () => {
    console.log(
      "----------------------------------\n" +
        "Server has successfully started." +
        "\nYou can now open the app in the browser: http://localhost:" +
        port +
        "\n----------------------------------"
    );
  });
})();
