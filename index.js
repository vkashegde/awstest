const express = require("express");
const app = express();

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/details", (req, res) => {
  res.send("This will be details ");
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
