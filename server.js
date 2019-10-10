// DEPENDANCIES BELOW THIS LINE
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;


// BODY PARSER FOR EXPRESS BELOW THIS LINE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("app/public"));

// ROUTING FOR API AND HTML BELOW THIS LINE
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// SERVER IS LISTENING FOR REQUEST WITH FUNCTION BELOW THIS LINE
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});