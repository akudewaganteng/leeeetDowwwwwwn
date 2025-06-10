const express = require("express");
const path = require("path");

const app = express();
const apiKey = "appolosigmabet";

app.use(express.static(__dirname));

app.get("/check", (req, res) => {
  const inputKey = req.query.apikey;
  const isValid = inputKey === apiKey;

  res.json({ valid: isValid });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

module.exports = app;
