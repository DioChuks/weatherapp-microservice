const express = require("express");
const https = require("https");
require('dotenv').config();

const weatherRoute = express.Router();
weatherRoute.get("/", (req, res) => {
  res.sendFile(__dirname, +"index.html");
});

weatherRoute.post("/", (req, res) => {
  const city = req.body.cityName;
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const unit = req.body.unit;

  
});
module.exports = weatherRoute;
