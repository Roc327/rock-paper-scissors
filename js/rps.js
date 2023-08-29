let playerScore = 0;
let cpuScore = 0;

function getComputerChoice() {
  // Function to get the choice rock, paper or scissors from for the computer
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
}

function getUserChoice() {
  // Function to get the choice from the user.
  let userChoice = prompt("Please choice rock, paper or scissors.");
  userChoice = userChoice.toLowerCase();
  return userChoice;
}

function playRound(playerSelection, computerSelection) {
  // Play a round of r, p, s using the passed in choices
  if (playerSelection === computerSelection) {
    return `It's a tie! Your choice: ${playerSelection}, CPU Choice: ${computerSelection}`;
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      cpuScore++;
      return `CPU wins. ${playerSelection} is beat by ${computerSelection}`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      cpuScore++;
      return `CPU wins. ${playerSelection} is beat by ${computerSelection}`;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      playerScore++;
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      cpuScore++;
      return `CPU wins. ${playerSelection} is beat by ${computerSelection}`;
    }
  }
}

function game() {
  // Play a 5 round game and keep score and report the overall winner at the end
  cpuScore = 0;
  playerScore = 0;

  let count = 5;

  while (count) {
    console.log(playRound(getUserChoice(), getComputerChoice()));
    console.log(`Player Score: ${playerScore}, CPU Score: ${cpuScore}`);
    count--;
  }
  console.log("Thanks for playing!");
}
