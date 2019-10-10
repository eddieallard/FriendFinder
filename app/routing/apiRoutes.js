var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        return res.json(friends)

    })
    app.post("/api/friends", function(req, res) {
        //send all information here and do calculations
        var userData = req.body;
        var points = userData.points;
        totalScore = [];
    
        // console.log(userData.points);
    
        for (let i = 0; i < points.length; i++) {
            totalScore.push(parseInt(points[i]));
        }
    
        // console.log(totalScore);
        for (let j = 0; j < friends.length; j++) {
            //console.log(friends[j].name, friends[j].points)
            var totalDifference = totalScore.map(
                function(a, i) {
                     return Math.abs(a - parseInt(friends[j].points));
                    });
            console.log(`${friends[j].name}'s total diff from you is ${totalDifference.reduce((a,b) => a + b, 0)}`);
        }
    })};