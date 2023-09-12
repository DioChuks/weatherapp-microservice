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

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=" +
    unit +
    "";
  https.get(url, (response) => {
    response.on("data", (chunk) => {
      const responseData = JSON.parse(chunk);
      const temperature = responseData.main.temp;
      const weatherDes = responseData.weather[0].description;
      const iconCode = responseData.weather[0].icon;
      const cityName = responseData.name;
      // Render the Handlebars template with the data
      res.render("weather_template", {
        temperature: temperature,
        cityName: cityName,
        weatherDes: weatherDes,
        iconCode: iconCode,
      });
    });
  });
});
module.exports = weatherRoute;
