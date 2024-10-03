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

function playGame() {
  // DECLARE the players score variables
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) { // IF human AND computer choose the same
      console.log("Tie!");

    } else {
      
      switch (humanChoice) { // both human and computer have 50% of winning (tie situation accounted)

        case "rock":
          if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
          } else {
            console.log("You lose! Paper beats Rock");
            computerScore++;
          }
          break;

        case "scissors":
          if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
          } else {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
          }
          break;

        case "paper":
          if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
          } else {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
          }
          break;

      }
    }
  }

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

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});
