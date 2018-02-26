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

    //create a variable called "currentBestMatch"
    //this will be equal to the dog object that is currently the best currentBestMatch
    //create a variable called "bestMatchDifference"
    //this will be equal to the match difference for the current best dog match

    //loop through all other dogs in the dogArray
    //compare the difference between current user's scores against those from other users, question by question.
    //Add up the differences to calculate the `totalDifference`.
    //if the totalDifference is less than the bestMatchDifference
    //set bestMatchDifference to totalDifference and currentBestMatch to the current dog object


    //Display friend result as a modal popup

    //Then add the new dog to the dogArray
    dogArray.push(req.body);
    res.json("Data Added", dogArray);

    console.log();
  })
}
