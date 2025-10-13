const express = require("express");
const app = express();

// Your routes
app.get("/", (req, res) => {
res.json({ message: "CI/CD Pipeline Working! 🚀" });
});

app.get("/products", (req, res) => {
  res.send(["Apple", "Banana", "Orange"]);
});

// Only start server if running directly (not during tests)
if (require.main === module) {
  app.listen(process.env.PORT || 8080, () => {
    console.log("Server is running");
  });
}
module.exports = app;
