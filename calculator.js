const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send ("hello");
});
app.get("/contact", function(req, res){
    res.send ("conatct no. : 9999999999");
});
app.get("/about", function(req, res){
    res.send ("Saloni Singh UG");
});

app.listen(5500, function(){
    console.log("port started at 5500");
});

