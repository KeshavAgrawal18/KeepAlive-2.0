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

// Keep-alive logic
const urlsToPing = [
  "https://doubtpolls.onrender.com/",
  "https://doubtpolls-backend.onrender.com/",
  "https://keepalive-2-0-pwar.onrender.com/",
];

// Function to handle keep-alive pings
const pingUrls = () => {
  urlsToPing.forEach((url) => {
    https
      .get(url, (res) => {
        console.log(`Keep-alive ping to ${url}:`, res.statusCode);
      })
      .on("error", (err) => {
        console.error(`Error with keep-alive ping to ${url}:`, err.message);
      });
  });
};

// Ping every 12 minutes
setInterval(pingUrls, 12 * 60 * 1000);
