function getRandomInteger(max) {
  // "max" is the largest integer that can be chosen PLUS 1
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  // CREATE variable "choice"
  let choice = getRandomInteger(3); // CHOOSE random integer, STORE it in "choice"
  
  switch (choice) {
    case 0: // IF choice EQUALS 0: 
      return "rock";
    
    case 1: // IF choice EQUALS 1: 
      return "paper";
    
    case 2: // IF choice EQUALS 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let choice; // CREATE variable that stores human's choice
  let keepGoing = true; // CREATE variable "keepGoing" that controls while loop
  
  while (keepGoing) { // CHECK human's choice

    choice = prompt('Please choose between "rock"," "paper" or "scissors"').toLowerCase(); // PROMPT the human to choose
    
    if (choice === "rock" || choice === "paper" || choice === "scissors") { // IF "choice" is valid
      keepGoing = false; // will exit out of loop in next iteration
    }
  }

  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) { // IF human AND computer choose the same
    results.textContent = "Tie!";

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
  // DECLARE the players score variables
  let humanScore = 0;
  let computerScore = 0;

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let humanChoice = button.id;
      let computerChoice = getComputerChoice();

      let roundWinner = playRound(humanChoice, computerChoice);

      if (roundWinner) {
        humanScore++;
      } else {
        computerScore++;
      }
    });
  });

  // for (let i = 0; i < 5; i++) { // CALL playRound 5 times
  //   let humanSelection = getHumanChoice();
  //   let computerSelection = getComputerChoice();
  //   playRound(humanSelection, computerSelection);
  //   console.log("You: ", humanScore, "||", "Computer: ", computerScore); // KEEP track of scores
  // }
  
  // DECLARE winner at the end
  if (humanScore === computerScore) { 
    console.log("Nobody wins!");

  } else if (humanScore > computerScore) {
    console.log("You win!");

  } else {
    console.log("Computer wins!");
  }

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

body.append(results);

playGame();