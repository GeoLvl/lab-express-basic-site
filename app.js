// require express
const express = require("express");
// create server
const app = express();


// Identify public folder for static files
app.use(express.static("public"));


// first home route
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

// second route to /about
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

// third route to /wirks
app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});


// start server on port 3000
app.listen(3000);
