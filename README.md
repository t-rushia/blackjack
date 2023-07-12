# blackjack

This is my first iteration of building a simple game with Vanilla Javascript.

When the user hits the start game button it calls a function that allows the user to input his/her name and the amount of money they would like to gamble. Those values are then stored into a player Object.

When the user selects the hit me button it will generate another random card between the values of 1-11, the sum of the players total cards will be kept and displayed in both the top of the game and at the below the total cards.

When the player hits stand, the dealers total will be randomly chosen from a hard coded array with the values between 17-25 an if statement is then used to determine the winner of the game. If the player hits a blackjack at the start or after a hit, the stand function is automatically called and the game ends with the player being the winner.
