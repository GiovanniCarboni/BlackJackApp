let player = {
	name: "Player",
	chips: 0
}

let cards = [];
let sum = 0;
	console.log(sum);
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let playerEl = document.querySelector("#player-el")
	playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;
	return randomNumber;
	if (randomNumber === 1) {
		return 11;
	} else if (randomNumber > 10) {
		return 10;
	} else {
		return randomNumber;
	}
}

function renderGame() {
	
	cardsEl.textContent = "Cards: ";
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += `${cards[i]} - `;
	}

	sumEl.textContent = `Sum: ${sum}`;
	if (sum <= 20) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		hasBlackJack = true;
		message = "You've got Blackjack!";
	} else {
		isAlive = false;
		message = "You are out of the game!";
	}
	messageEl.textContent = message;
	console.log(message);
}


function startGame() {
	isAlive = true;

	// let firstCard = Math.floor(Math.random() * 12);
	let firstCard = getRandomCard();
	console.log(firstCard);

	// let secondCard = Math.floor(Math.random() * 12);
	let secondCard = getRandomCard();
	console.log(secondCard);

	cards = [firstCard, secondCard];

	sum = firstCard + secondCard;
	
	renderGame();
}

function drawCard() {
	//let newCard = Math.floor(Math.random() * 12);
	if (isAlive && hasBlackJack === false) {
		let newCard = getRandomCard();
		sum += newCard;
		cards.push(newCard);
		renderGame();
	}
}

let hands = ["rock", "paper", "scissor"];
let draw = Math.floor(Math.random() * 3);

function play() {
	return hands[draw];
}

console.log(play())