function startGame() {
  dealerTotal.textContent = "";
  let player = {
    name: prompt("What is your name?"),
    chips: prompt("How much would you like to bet?")
  };
  playerDetails.textContent = `${player.name}, $${player.chips}`;
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
    stand();
  } else {
    gameResults.textContent = "You broke, sorrry you lose.";
    inGame = false;
    stand();
  }
}

function hit() {
  if (inGame === true && hasBlackJack === false) {
    let newCard = randomCard();
    cards.push(newCard);
    sum += newCard;
    playerDisplayTotal.textContent = sum;
    playerSum.textContent = sum;
    renderGame();
  }
}

function stand() {
  let options = [17, 18, 19, 20, 21, 22, 23, 24, 25];
  let dealerChoice = options[Math.floor(Math.random() * options.length)];
  dealerTotal.textContent = dealerChoice;

  if (sum === dealerChoice) {
    gameResults.textContent = "You broke even.";
  } else if (sum > dealerChoice && sum <= 21) {
    gameResults.textContent = "You win!";
  } else if (dealerChoice > sum && dealerChoice <= 21) {
    gameResults.textContent = "Dealer wins.";
  } else if (sum === 21) {
    gameResults.textContent = "BlackJack! You win!";
  } else if (dealerChoice > 21) {
    gameResults.textContent = "You win!";
  }
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let inGame = false;
let playerCards = document.querySelector("#playercards-el");
let playerDisplayTotal = document.querySelector("#playertotal-el");
let gameResults = document.querySelector("#gameresults-el");
let playerSum = document.querySelector("#sum-el");
let playerDetails = document.querySelector("#player-info");
let dealerTotal = document.querySelector("#dealertotal-el");
