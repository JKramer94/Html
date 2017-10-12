var express = require("express");
var app = express();

// "/" => "hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye my friend!!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    res.send("Meow");
});
app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("Welcome to " + subreddit.toUpperCase() + " subreddit :)");
})
app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    var subreddit = req.params.subredditName;
    var id = req.params.id;
    var title = req.params.title;
    res.send("Welcome to the " + subreddit + " Comment side at Id: " + id + " Title: " + title);
})
app.get("*", function(req, res) {
    res.send("You are a star");
});
//Tell Express to listen for request (start server)

app.listen(3000, function() {
    console.log("Server has started")
});