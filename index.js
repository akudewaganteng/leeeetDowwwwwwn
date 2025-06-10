const express = require("express");
const path = require("path");

const app = express();
const apiKey = "apikey123"; // Ganti sesuai kebutuhan

// Serve static file (index.html)
app.use(express.static(__dirname));

// Cek API key via GET
app.get("/", (req, res) => {
  const key = req.query.apikey;

  if (!key) {
    // Jika tidak ada query, kirim index.html
    return res.sendFile(path.join(__dirname, "index.html"));
  }

  if (key === apiKey) {
    // API key benar
    res.send(`<script>alert("API key benar"); window.location.href="/";</script>`);
  } else {
    // API key salah
    res.send(`<script>alert("API key salah"); window.location.href="/";</script>`);
  }
});

module.exports = app;
