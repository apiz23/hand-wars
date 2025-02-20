// Define user and computer images
const images = {
	rock: {
		user: "./assets/img/rock_user.png",
		computer: "./assets/img/rock_comp.png",
	},
	paper: {
		user: "./assets/img/paper_user.png",
		computer: "./assets/img/paper_comp.png",
	},
	scissors: {
		user: "./assets/img/scissors_user.png",
		computer: "./assets/img/scissors_comp.png",
	},
};

// Get all elements
const userImage = document.getElementById("user-image");
const computerImage = document.getElementById("computer-image");
const resultDiv = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resetButton = document.getElementById("reset-button");

// Initialize scores
let userScore = parseInt(sessionStorage.getItem("userScore")) || 0;
let computerScore = parseInt(sessionStorage.getItem("computerScore")) || 0;

// Update score display
userScoreDisplay.textContent = userScore;
computerScoreDisplay.textContent = computerScore;

// Function to generate a random choice for the computer
function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
	if (userChoice === computerChoice) {
		return "It's a tie!";
	} else if (
		(userChoice === "rock" && computerChoice === "scissors") ||
		(userChoice === "paper" && computerChoice === "rock") ||
		(userChoice === "scissors" && computerChoice === "paper")
	) {
		userScore++;
		sessionStorage.setItem("userScore", userScore);
		return "You win!";
	} else {
		computerScore++;
		sessionStorage.setItem("computerScore", computerScore);
		return "Computer wins!";
	}
}

// Main game function
function playGame(userChoice) {
	const computerChoice = getComputerChoice();

	userImage.src = images[userChoice].user;
	computerImage.src = images[computerChoice].computer;

	const result = determineWinner(userChoice, computerChoice);

	userScoreDisplay.textContent = userScore;
	computerScoreDisplay.textContent = computerScore;

	resultDiv.textContent = result;
}

// Event listeners for game choices
["rock", "paper", "scissors"].forEach((choice) => {
	document
		.getElementById(choice)
		.addEventListener("click", () => playGame(choice));
});

// Function to reset scores
function resetScores() {
	sessionStorage.removeItem("userScore");
	sessionStorage.removeItem("computerScore");

	userScore = 0;
	computerScore = 0;

	userScoreDisplay.textContent = userScore;
	computerScoreDisplay.textContent = computerScore;
	resultDiv.textContent = "Choose your move!";

	// Reset images to default
	userImage.src = "./assets/img/rock_user.png";
	computerImage.src = "./assets/img/rock_comp.png";
}

// Reset button event listener
resetButton.addEventListener("click", resetScores);
