// DEPENDENCIES
// npm packages used
var express = require('express');
var bodyParser = require('body-parser');

//Configure express server
var app = express();

//Set initial port
var PORT = 3000;

//set up express app to handle data parsing
//use body-parser npm
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Require routes to the html and api routes
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
