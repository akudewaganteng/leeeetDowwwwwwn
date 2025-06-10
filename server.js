const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const apiKey = "apikey123"; // ganti sesuai keinginan

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // supaya bisa akses index.html

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

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
