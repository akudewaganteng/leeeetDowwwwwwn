const express = require("express");
const path = require("path");

const app = express();
const apiKey = "appolodb"; // ubah sesuai kebutuhan

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  const inputKey = req.query.apikey;

  if (!inputKey) {
    // jika tidak ada apikey di URL → tampilkan index.html
    res.sendFile(path.join(__dirname, "index.html"));
  } else if (inputKey === apiKey) {
    // jika benar
    res.send(`<script>
      document.body.innerHTML = '<h1>API key benar</h1><a href="/">Kembali</a>';
    </script>`);
  } else {
    // jika salah
    res.send(`<script>alert("API key salah"); window.location.href="/";</script>`);
  }
});

module.exports = app;
