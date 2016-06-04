var express = require("express");
var app = express();
var fs = require("fs");

app.use(express.static(__dirname+"/public"));

app.get("/herodata", function(request, response){
    fs.readFile("data/heroes.json", function(err, data){
        response.send(data.toString());
    })
});


app.listen(1234, function () {
    console.log("server is now running on 1234");
})
