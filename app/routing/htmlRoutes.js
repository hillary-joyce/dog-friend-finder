//Set up npm dependencies, need path to get the correct file path
var path = require('path');

//Set up routing for the 2 html pages (home and survey)
//use module.exports to make it available outside the file
module.exports = function(app) {
  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/friends", function(req, res){
    res.sendFile(path.join(__dirname, "../data/friends.js"));
  });
};
