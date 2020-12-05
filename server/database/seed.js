/**
 * This file will be used to generate seed data into our database
 */

const mongoose = require("mongoose");
const axios = require("axios");
const Article = require("./models/article");
const keys = require("../config/keys");

mongoose.connect(keys.mlab_local_url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// First drop our collection to start fresh. You can comment this
// line if you want to add the seed data to the collection
Article.collection.drop();
console.log("Articles collection has been removed...");

(async () => {
  const random = (obj) => {
    const number = Math.floor(Math.random() * 10);
    return obj[number];
  };

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

  try {
    await Article.insertMany(data);
    console.log(
      data.length + " records has been saved to the articles collection."
    );
  } catch (e) {
    console.log(e);
  }

  mongoose.connection.close();
})();
