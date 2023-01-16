const { application } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");
app.get("/", (req, res) => {
  res.send("News api is Running");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/category/:id", (req, res) => {    
  const id = req.params.id;
  if (id == "06" || id == "08") {
    res.send(news);
  } else {
    const category_news = news.filter((n) => n.category_id == id);
    res.send(category_news);
  }
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});
app.listen(port, () => {
  console.log("Listening on port", port);
});
