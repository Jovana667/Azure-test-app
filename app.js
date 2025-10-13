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
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
module.exports = app;
