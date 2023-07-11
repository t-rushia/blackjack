function startGame() {
  playerCards.textContent = `${firstCard}, ${secondCard}, `;
  playerDisplayTotal.textContent = sum;
  playerSum.textContent = sum;

  if (sum < 21) {
    gameResults.textContent = "Would you like another card?";
  } else if (sum === 21) {
    gameResults.textContent = "BlackJack! Congrats.";
    hasBlackJack = true;
  } else {
    gameResults.textContent = "You broke, sorrry you lose.";
    inGame = false;
  }
}

function hit() {
  let newCard = 7;
  sum += newCard;
  playerDisplayTotal.textContent = sum;
  playerCards.textContent += `${newCard}`;
  playerSum.textContent = sum;
  startGame();
}

let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let inGame = true;
let playerCards = document.querySelector("#playercards-el");
let playerDisplayTotal = document.querySelector("#playertotal-el");
let gameResults = document.querySelector("#gameresults-el");
let playerSum = document.querySelector("#sum-el");
