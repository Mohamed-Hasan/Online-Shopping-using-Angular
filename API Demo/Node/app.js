var express = require('express');
var server = express();

server.get("/", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
    var movieArr = ["Moon Light","The Pursuit of Happiness", "The Saw"];
    console.log("hi")
    response.json(movieArr);
    // return movieArr;
})

server.listen(5000);