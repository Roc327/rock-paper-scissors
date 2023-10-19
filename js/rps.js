let playerScore = 0;
let cpuScore = 0;
let userChoice = "";

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

function playRound(playerSelection, computerSelection) {
  // Play a round of r, p, s using the passed in choices
  if (playerSelection === computerSelection) {
    return {
      resultString: `It's a tie! Your choice: ${playerSelection}, CPU Choice: ${computerSelection}`,
      winner: 0,
    };
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      return {
        resultString: `You win! ${playerSelection} beats ${computerSelection}`,
        winner: 1,
      };
    } else {
      cpuScore++;
      return {
        resultString: `CPU wins. ${playerSelection} is beat by ${computerSelection}`,
        winner: 2,
      };
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return {
        resultString: `You win! ${playerSelection} beats ${computerSelection}`,
        winner: 1,
      };
    } else {
      cpuScore++;
      return {
        resultString: `CPU wins. ${playerSelection} is beat by ${computerSelection}`,
        winner: 2,
      };
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      playerScore++;
      return {
        resultString: `You win! ${playerSelection} beats ${computerSelection}`,
        winner: 1,
      };
    } else {
      cpuScore++;
      return {
        resultString: `CPU wins. ${playerSelection} is beat by ${computerSelection}`,
        winner: 2,
      };
    }
  }
}

function buttonClick(clickedId) {
  // handle button click and get userChoice, play a round then
  // display result, update score and check for winner
  userChoice = clickedId;
  let result = playRound(userChoice, getComputerChoice());
  displayResult(result.resultString);
  updateScore();
  checkWinner();
}

function displayResult(result) {
  // update html with winner result
  document.getElementById("rps-winner").innerHTML = result;
}

function updateScore() {
  // update html to display new score depending on who won the round.
  document.getElementById("cpu-score").innerHTML = cpuScore;
  document.getElementById("player-score").innerHTML = playerScore;
}

function checkWinner() {
  // check if either player has 5 points
  if (playerScore == 5) {
    document.getElementById("rps-winner").innerHTML =
      "Congratulations! YOU WIN!";
    buttonVisibility("hidden");
  } else if (cpuScore == 5) {
    document.getElementById("rps-winner").innerHTML =
      "Sorry, you lose. Beter luck next time.";
    buttonVisibility("hidden");
  }
}

function buttonVisibility(option) {
  // set weather buttons are visible or not
  const buttonList = document.querySelectorAll("#rock, #paper, #scissors");
  if (option === "hidden") {
    buttonList.forEach((element) => {
      element.style.visibility = "hidden";
    });
  } else if (option === "visible") {
    buttonList.forEach((element) => {
      element.style.visibility = "visible";
    });
  }
}

function resetGame() {
  // resets game when a winner has been reached to play again
  playerScore = 0;
  cpuScore = 0;
  updateScore();
  document.getElementById("rps-winner").innerHTML = "";
  buttonVisibility("visible");
}
