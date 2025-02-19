// Define image paths
const images = {
	rock: "./assets/img/rock.png",
	paper: "./assets/img/paper.png",
	scissors: "./assets/img/scissors.png",
};

// Get DOM elements
const userImage = document.getElementById("user-image");
const computerImage = document.getElementById("computer-image");
const resultDiv = document.getElementById("result");

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
		return "You win!";
	} else {
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
	// Update user image
	userImage.src = images[userChoice];

	// Get computer choice
	const computerChoice = getComputerChoice();
	computerImage.src = images[computerChoice];

	// Determine the winner
	const result = determineWinner(userChoice, computerChoice);
	resultDiv.textContent = result;
}
