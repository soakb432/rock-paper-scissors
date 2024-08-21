function getRandomInteger(max) {
  //  ["max" is the largest integer that can be chosen PLUS 1]
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  //  CREATE variable "choice"
  let choice = getRandomInteger(3); //  CHOOSE random integer, STORE it in "choice"
  
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
  //  CREATE variable that stores human's choice
  let choice = prompt('Please choose between "rock"," "paper" or "scissors"' ).toLowerCase() //  PROMPT the human to choose
  return choice;
}

//FUNCTION getHumanChoice() 
//
//}