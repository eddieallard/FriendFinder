var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        return res.json(friends)

    })
    app.post("/api/friends", function(req, res){
        var newMatch = req.body;
        var points = [];
        for (let index = 0; index < newMatch.length; index++) {
            const updatedPoints = parseInt(NewMatch.points[index]);
            points.push(updatedPoints);
        }
        console.log(newMatch);
        console.log(points);
        newMatch.points = newMatch
        newMatch.push();
    })
}