function getRandomInteger(max) {
  // "max" is the largest integer that can be chosen PLUS 1
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let choice = getRandomInteger(3);
  
  switch (choice) {
    case 0:
      return "rock";
    
    case 1:
      return "paper";
    
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let choice;
  let keepGoing = true;
  
  while (keepGoing) {

    choice = prompt('Please choose between "rock"," "paper" or "scissors"').toLowerCase();
    
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      keepGoing = false;
    }
  }

  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    results.textContent = "Tie!";
    return null;

  } else {
    
    switch (humanChoice) { // both human and computer have 50% of winning (tie situation accounted)

      case "rock":
        if (computerChoice === "scissors") {
          results.textContent = "You win! Rock beats Scissors";
          return true;
        } else {
          results.textContent = "You lose! Paper beats Rock";
          return false;
        }

      case "scissors":
        if (computerChoice === "paper") {
          results.textContent = "You win! Scissors beats Paper";
          return true;
        } else {
          results.textContent = "You lose! Rock beats Scissors";
          return false;
        }

      case "paper":
        if (computerChoice === "rock") {
          results.textContent = "You win! Paper beats Rock";
          return true;
        } else {
          results.textContent = "You lose! Scissors beats Paper";
          return false;
        }

    }
  }
}


function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const buttons = document.querySelectorAll("button");

  let scoreReset = () => {
    humanScore = 0;
    computerScore = 0;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let humanChoice = button.id;
      let computerChoice = getComputerChoice();

      let roundWinner = playRound(humanChoice, computerChoice);

      if (roundWinner) {
        humanScore++;
      } else if (roundWinner === false) {
        computerScore++;
      }

      if (humanScore >= 5 || computerScore >= 5) {
        results.textContent = (humanScore > computerScore) ? "You win!" : "Computer wins!";
        results.textContent += " Press any button to play again.";

        scoreReset();
      } 

      score.textContent = "You: " + humanScore + " || " + "Computer: " + computerScore;

    });
  });
}

//----- UI CREATION ----//

const body = document.querySelector("body");

const rock = document.createElement("button");
rock.setAttribute("id", "rock");
rock.textContent = "Rock";

const paper = document.createElement("button");
paper.setAttribute("id", "paper");
paper.textContent = "Paper";

const scissors = document.createElement("button");
scissors.setAttribute("id", "scissors");
scissors.textContent = "Scissors";

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

const results = document.createElement("div");
const score = document.createElement("div");

body.append(results);
body.append(score);

playGame();