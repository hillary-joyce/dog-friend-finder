//Set up dependecies - require the dog data array from friends.js
var dogArray = require("../data/friends");

//Routing - create 2 exportable api routes
module.exports = function(app) {
  //First route is a GET route, used to display a JSON of all possible friends
  app.get("/api/friends", function(req, res){
    res.json(dogArray);
  });

  //Second route is a POST route, used to handle incoming survey results
  //Also will be used to handle compatabilty logic
  app.post("/api/friends", function(req, res){
    console.log(req.body);
    //create a variable called "currentBestMatch"
    //this will be equal to the dog object that is currently the best currentBestMatch
    var currentBestMatch = "";
    //create a variable called "bestMatchDifference"
    //this will be equal to the match difference for the current best dog match
    var bestMatchDifference = 1000;
    //loop through all other dogs in the dogArray
    for(i = 0; i < dogArray.length; i++){
      var diff = 0;
    //compare the difference between current user's scores against those from other users, question by question.
      for(j = 0; j < 10; j++){
        addToDiff = Math.abs(dogArray[i].scores[j] - parseInt(req.body.scores[j]));
        diff = diff + addToDiff;
      }
    console.log(diff);
    //Add up the differences to calculate the `totalDifference`.
    //if the totalDifference is less than the bestMatchDifference
    if(diff < bestMatchDifference){
    //set bestMatchDifference to totalDifference and currentBestMatch to the current dog object
      currentBestMatch = dogArray[i];
      bestMatchDifference = diff;
    }

    }
    //Display friend result as a modal popup

    //Then add the new dog to the dogArray
    dogArray.push(req.body);
    res.json(currentBestMatch);

    console.log(parseInt(req.body.scores[2]));
  })
}
