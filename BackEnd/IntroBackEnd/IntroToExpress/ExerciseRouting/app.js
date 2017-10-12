var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!")
})

app.get("/speak/:animal", function(req, res) {
    //Object med de forskellige lyde dyrne laver
    var sounds = {
            pig: "Oink",
            cow: "Moo",
            dog: "Woof Woof!",
            cat: "I hate you human",
            goldfish: "..."
        }
        //Laver variablerne
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    //Dette vises på hjemmesiden når man indtaster det rigtige
    res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:str/:num", function(req, res) {
    var message = req.params.str;
    var num = Number(req.params.num);
    var result = "";
    for (var i = 0; i < num; i++) {
        result += message + " ";
    }
    res.send(result);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?")
});

app.listen(3000, function() {
    console.log("Server has started")
});