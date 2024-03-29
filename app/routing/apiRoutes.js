var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        var difference = 100;
        var matchName = '';
        var matchPhoto = '';

        friends.forEach(function (friend) {
            var matchedPointsArray = [];
            var totalDifference = 100;

            function add(total, num) {
                return total + num;
            }

            for (var i = 0; i < friend.points.length; i++) {
                matchedPointsArray.push(Math.abs(parseInt(req.body.points[i]) - parseInt(friend.points[i])));
            }
            totalDifference = matchedPointsArray.reduce(add, 0);

            if (totalDifference < difference) {
                difference = totalDifference;
                matchName = friend.name;
                matchPhoto = friend.photo
            }
        });

        res.json({
            name: matchName,
            photo: matchPhoto
        });

        friends.push(req.body);
    });
}