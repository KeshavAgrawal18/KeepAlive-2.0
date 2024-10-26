const express = require("express");
const https = require("https");

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

// Keep-alive logic (self-ping for HTTPS)
setInterval(() => {
  https
    .get(`https://doubtpolls.onrender.com/`, (res) => {
      console.log("Keep-alive ping:", res.statusCode);
    })
    .on("error", (err) => {
      console.error("Error with keep-alive ping:", err.message);
    });
}, 10 * 60 * 1000);

setInterval(() => {
  https
    .get(`https://keepalive-2-0-pwar.onrender.com/`, (res) => {
      console.log("Keep-alive ping:", res.statusCode);
    })
    .on("error", (err) => {
      console.error("Error with keep-alive ping:", err.message);
    });
}, 10 * 60 * 1000);

// Ping every 10 minutes (adjust as needed)
