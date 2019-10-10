# FriendFinder

Friend Finder is basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

We utilize Express.js to handle routing.

You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

We compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
<<<<<<< HEAD

# Example:

=======

Example:
>>>>>>> 2ccf9774ca0d6cddf6950b0bbae775dc447d41bf
* User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
* User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
* Total Difference: 2 + 1 + 2 = 5

The closest match will be the user with the least amount of difference.
<<<<<<< HEAD

Once you've found your most compatible friend, it will be displayed in the result as a modal pop-up.
=======
>>>>>>> 2ccf9774ca0d6cddf6950b0bbae775dc447d41bf

Once you've found your most compatible friend, it will be displayed in the result as a modal pop-up.

The modal should display both the name and picture of the closest match.
