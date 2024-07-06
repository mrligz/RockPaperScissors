const options = ["rock", "paper", "scissors"];

function computerPlay() {
	const choice = options[Math.floor(Math.random() * options.length)];
	console.log(choice);
	return choice;
}

function checkWinner(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return "Tie";
	} else if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "scissors" && computerSelection == "paper") ||
		(playerSelection == "paper" && computerSelection == "rock")
	) {
		return "Player";
	} else {
		return "Computer";
	}
}

function playRound(playerSelection, computerSelection) {
	const result = checkWinner(playerSelection, computerSelection);
	if (result == "Tie") {
		return "It's a tie!";
	} else if (result == "Player") {
		return "You win!";
	} else {
		return "You lose!";
	}
}

function getPlayerChoice() {
	return window.prompt("choose" + " " + options);
}
getPlayerChoice();
function game() {
	for (let i = 0; i < 5; i++) {
		const playerSelection = "rock";
		const computerSelection = computerPlay();
		console.log(playRound(playerSelection, computerSelection));
	}
}
game();
