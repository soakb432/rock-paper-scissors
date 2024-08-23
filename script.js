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

// DECLARE the players score variables
let humanScore = 0;
let computerScore = 0;

// FUNCTION playRound(humanChoice, computerChoice) {
//   "humanChoice" is the choice made by the human
//   "computerChoice" is the choice made by the computer
//   PLAY a game:
//     "rock" beats "scissors", "scissors" beat "paper", "paper" beats "rock" 
//
//     IF human AND computer choose the same --> Tie
//     both human and computer have 50% of winning (tie situation accounted)
//     ELSE IF { human chooses "rock" AND computer chooses "scissors" --> “You win! Rock beats Scissors"
//     } ELSE --> “You lose! Paper beats Rock”
//     ELSE IF { human chooses "scissors" AND computer chooses "paper" --> “You win! Scissors beats Paper"
//     } ELSE --> “You lose! Rock beats Scissors"
//     ELSE IF { human chooses "paper" AND computer chooses "rock" --> “You win! Paper beats Rock"
//     } ELSE --> “You lose! Scissors beats Paper"
// }