const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

// set initial values for game
let playerScore = 0;
let computerScore = 0;
let isGameOver = false;
let scoreToReach = 5;

document.getElementById("rockButton").addEventListener("click", function () {
  playGame("rock"); // pass choice to playGame function
});
document.getElementById("paperButton").addEventListener("click", function () {
  playGame("paper");
});
document
  .getElementById("scissorsButton")
  .addEventListener("click", function () {
    playGame("scissors");
  });

function getComputerChoice() {
  // rock is index 0, paper index 1, scissors index 2
  const choices = ["rock", "paper", "scissors"];
  // generates random number between 0 and 2 for the computerChoice and
  // correlates the number to globally defined choices array index position
  return choices[Math.floor(Math.random() * choices.length)];
}

// function getHumanChoice() {
//   // use prompt to get user choice in lowercase, return that as the humanChoice
//   // let humanChoice = prompt(
//   //   "Do you choose rock, paper or scissors?"
//   // ).toLowerCase();
//   // need to be using the & operator, not | or else loop will always be true
//   // ie: if humanChoice is 'rock', humanChoice !== 'paper' equals true
//   while (
//     humanChoice !== "rock" &&
//     humanChoice !== "paper" &&
//     humanChoice !== "scissors"
//   ) {
//     alert("That isn't a valid choice!");
//     humanChoice = prompt("Please choose rock, paper or scissors").toLowerCase();
//   }
//   console.log(humanChoice);
//   return humanChoice; // return valid humanChoice from function
// }

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

// for (let i = 0; i < 5; i++) {
//   // iterates over 5 rounds
//   // calls for new human and computer choice in each of 5 iterations
//   const humanSelection = getHumanChoice();
//   const computerSelection = getComputerChoice();
//   playRound(humanSelection, computerSelection);
// }

function playRound(humanChoice, computerChoice) {
  // function responsible for determining game winner based on game logic
  let result = "";
  // take random computerChoice and compare to humanChoice for round win evaluation
  if (humanChoice === computerChoice) {
    result = "It's a tie! Play again.";
  } else {
    switch (humanChoice) {
      case "rock":
        // result equals whatever is returned, so if humanChoice equals 'rock'
        // and computer choice equals 'scissors', user wins string is returned,
        // otherwise the computer wins string is returned
        result = computerChoice === "scissors" ? "You win!" : "Computer wins!";
        // break to exit
        break;
      case "paper":
        result = computerChoice === "rock" ? "You win!" : "Computer wins!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You win!" : "Computer wins!";
        break;
    }
  }

  // console.log(result);
  playerDisplay.textContent = `PLAYER: ${humanChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  switch (result) {
    case "You win!":
      playerScore++;
      playerScoreDisplay.textContent = `Player score: ${playerScore}`;
      break;
    case "Computer wins!":
      computerScore++;
      computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
      break;
  }
}

// winner and loser declared when player or computer score equals score to reach
function endGame() {
  if (playerScore === scoreToReach || computerScore === scoreToReach) {
    isGameOver = true;
    if (playerScore === scoreToReach) {
      resultDisplay.textContent = "You won the game! Yay!";
    } else if (computerScore === scoreToReach) {
      resultDisplay.textContent = "You lose the game. Better luck next time.";
    }
  }
}

function playGame(humanChoice) {
  // check if game is over first
  if (!isGameOver) {
    // function responsible for setting up a game round, including getting
    // the computer choice, then calls playRound with both choices
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    endGame(); // call endGame function if the scores permit
  }
}

// playGame();
