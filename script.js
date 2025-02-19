// Define of user and comp images
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

// Get DOM elements
const userImage = document.getElementById("user-image");
const computerImage = document.getElementById("computer-image");
const resultDiv = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resetButton = document.getElementById("reset-button");

// Initialize scores from sessionStorage or set to 0 if not present
let userScore = parseInt(sessionStorage.getItem("userScore")) || 0;
let computerScore = parseInt(sessionStorage.getItem("computerScore")) || 0;

// Update score display
userScoreDisplay.textContent = userScore;
computerScoreDisplay.textContent = computerScore;

// Function to generate a random choice for the computer
function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
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

// Event listeners for buttons
document
	.getElementById("rock")
	.addEventListener("click", () => playGame("rock"));
document
	.getElementById("paper")
	.addEventListener("click", () => playGame("paper"));
document
	.getElementById("scissors")
	.addEventListener("click", () => playGame("scissors"));

// Main game function
function playGame(userChoice) {
	userImage.src = images[userChoice].user;

	const computerChoice = getComputerChoice();
	computerImage.src = images[computerChoice].computer;

	const result = determineWinner(userChoice, computerChoice);

	userScoreDisplay.textContent = userScore;
	computerScoreDisplay.textContent = computerScore;

	resultDiv.textContent = result;
}

// Function to reset scores
function resetScores() {
	// Clear scores in sessionStorage
	sessionStorage.removeItem("userScore");
	sessionStorage.removeItem("computerScore");

	// Reset scores in variables
	userScore = 0;
	computerScore = 0;

	// Update the score display
	userScoreDisplay.textContent = userScore;
	computerScoreDisplay.textContent = computerScore;

	// Reset result text
	resultDiv.textContent = "";

	// Reset images to default (optional)
	userImage.src = "./assets/img/rock_user.png";
	computerImage.src = "./assets/img/rock_comp.png";
}
resetButton.addEventListener("click", resetScores);
