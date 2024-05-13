function getComputerChoice() {
  // rock is index 0, paper index 1, scissors index 2
  const choices = ["rock", "paper", "scissors"];
  // generates random number between 0 and 2 for the computerChoice and
  // correlates the number to globally defined choices array index position
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  // use prompt to get user choice in lowercase, return that as the humanChoice
  let humanChoice = prompt(
    "Do you choose rock, paper or scissors?"
  ).toLowerCase();
  // need to be using the & operator, not | or else loop will always be true
  // ie: if humanChoice is 'rock', humanChoice !== 'paper' equals true
  while (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    alert("That isn't a valid choice!");
    humanChoice = prompt("Please choose rock, paper or scissors").toLowerCase();
  }
  console.log(humanChoice);
  return humanChoice; // return valid humanChoice from function
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    // iterates over 5 rounds
    // calls for new human and computer choice in each of 5 iterations
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  function playRound(humanChoice, computerChoice) {
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
          result =
            computerChoice === "scissors" ? "You win!" : "Computer wins!";
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
    console.log(result);
  }
}

playGame();
