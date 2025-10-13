// This is your simple "shop"
const express = require("express");
const app = express();

// When someone visits your site, show this message
app.get("/", (req, res) => {
  res.send("Welcome to my shop!");
});

// Show a list of products
app.get("/products", (req, res) => {
  res.send(["Apple", "Banana", "Orange"]);
});

// Start the shop on port 3000
app.listen(3000, () => {
  console.log("Shop is open on http://localhost:3000");
});
