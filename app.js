const express = require("express");
const app = express();

// Your routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my shop!" });
});

app.get("/products", (req, res) => {
  res.send(["Apple", "Banana", "Orange"]);
});

// Only start server if running directly (not during tests)
if (require.main === module) {
  app.listen(3000, () => {
    console.log("Shop is open on http://localhost:3000");
  });
}

module.exports = app;
