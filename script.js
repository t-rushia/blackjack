function startGame() {
  let firstCard = randomCard();
  let secondCard = randomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  playerSum.textContent = sum;
  inGame = true;
  renderGame();
}

function randomCard() {
  return Math.floor(Math.random() * 11) + 1;
}

function renderGame() {
  playerCards.textContent = "";
  for (let i = 0; i < cards.length; i++) {
    playerCards.textContent += `${cards[i]}, `;
  }
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
  let newCard = randomCard();
  cards.push(newCard);
  sum += newCard;
  playerDisplayTotal.textContent = sum;
  playerSum.textContent = sum;
  renderGame();
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let inGame = false;
let playerCards = document.querySelector("#playercards-el");
let playerDisplayTotal = document.querySelector("#playertotal-el");
let gameResults = document.querySelector("#gameresults-el");
let playerSum = document.querySelector("#sum-el");
