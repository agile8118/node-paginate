const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");

const app = express();
const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 4080;

app.use(express.static(publicPath));
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  process.env.NODE_ENV === "production" ? keys.mlab_url : keys.mlab_local_url,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);
mongoose.Promise = global.Promise;

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
      "Server has started on port " +
      port +
      "\n----------------------------------"
  );
});
