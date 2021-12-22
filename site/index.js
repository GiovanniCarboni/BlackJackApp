let firstCard = Math.floor(Math.random() * 12);
console.log(firstCard);

let secondCard = Math.floor(Math.random() * 12);
console.log(secondCard);

let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;
console.log(sum);

let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");


function renderGame() {
	cardsEl.textContent = `Cards: ${cards[0]} - ${cards[1]}`;
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
	renderGame();
}

function drawCard() {
	console.log("Drawing a new card from the deck")
	let newCard = Math.floor(Math.random() * 12);
	console.log(newCard);
	sum += newCard;
	cards.push(newCard);
	renderGame();
}
