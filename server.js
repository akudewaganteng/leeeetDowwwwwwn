const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const apiKey = "appolodb"; // ganti sesuai kebutuhan

// Izinkan file statis (seperti index.html)
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const inputKey = req.body.apikey;
  if (inputKey === apiKey) {
    res.send(`<script>
      document.body.innerHTML = '<h1>API key benar</h1><a href="/">Kembali</a>';
    </script>`);
  } else {
    res.send(`<script>alert("API key salah"); window.location.href="/";</script>`);
  }
});

module.exports = app;
