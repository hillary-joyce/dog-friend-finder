// DEPENDENCIES
// npm packages used
var express = require('express');
var bodyParser = require('body-parser');

//Configure express server
var app = express();

//Set initial port
var PORT = process.env.PORT || 8080;

//set up express app to handle data parsing
//use body-parser npm
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Require routes to the html and api routes
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

//Use CSS files in css folder
app.use(express.static('app/public'))

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
