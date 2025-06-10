const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const API_KEY = '123456ABC'; // ganti sesuai kebutuhan

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { apikey } = req.body;
  if (apikey === API_KEY) {
    res.redirect('/dashboard.html');
  } else {
    res.send(`<script>alert("API Key Salah");window.location.href="/";</script>`);
  }
});

module.exports = app;