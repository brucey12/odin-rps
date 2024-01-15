let playerScore = 0;
let computerScore = 0;
let roundWinner;

function getComputerChoice() {
  let computerNumber = [Math.floor(Math.random() * 3)];

  if (computerNumber == 0) {
    return "rock";
  } else if (computerNumber == 1) {
    return "paper";
  } else if (computerNumber == 2) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return (
      "Tie game! You both chose " + computerSelection + ". Replay the round."
    );
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore += 1;
    return "You win! ${playerSelection} beats ${computerSelection}!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore += 1;
    return "You win! ${playerSelection} beats ${computerSelection}!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore += 1;
    return "You win! ${playerSelection} beats ${computerSelection}!";
  } else {
    computerScore += 1;
    return "You lose! ${computerSelection} beats ${playerSelection}!";
  }
}

function game() {
  while (playerScore < 5 && computerScore < 5) {
    let playerSelection = prompt(
      "Would you like to choose rock, paper or scissors?"
    ).toLowerCase;
    let computerSelection = getComputerChoice();
    console.log("You're doing great! Keep going!");
    playRound(playerSelection, computerSelection);
  }

  if (playerScore === 5) {
    console.log("You won the game! Congrats!");
  } else if (computerScore === 5) {
    console.log(
      "The computer beat you. Maybe find something else to do with your time?"
    );
  } else {
  }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

game();
console.log(playerScore);
console.log(computerScore);
