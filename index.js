const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const hbs = require('hbs');
require('dotenv').config();

const aboutRouter = require("./routes/about");
const weatherRouter = require("./routes/weather");
const PORT = 5000;

app.use(express.static(__dirname + '/public')); // Serve static files from the 'public' directory
app.set('view engine', 'hbs'); // Set Handlebars as the view engine
// Set the directory for your Handlebars views (templates)/
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended:true}));

app.use("/weather", weatherRouter);
app.use("/about", aboutRouter);

app.listen(PORT, () => {
    console.log("Server is running on port 5000");
});