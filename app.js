const express = require("express");
const http = require("http");

const app = express();
const PORT = process.env.PORT || 3000;

// Basic route
app.get("/", (req, res) => {
  res.send("Your app is running!");
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Keep-alive logic (self-ping)
setInterval(() => {
  http
    .get(`http://localhost:${PORT}`, (res) => {
      console.log("Keep-alive ping:", res.statusCode);
    })
    .on("error", (err) => {
      console.error("Error with keep-alive ping:", err.message);
    });
}, 5 * 60 * 1000); // Ping every 5 minutes (adjust as needed)
