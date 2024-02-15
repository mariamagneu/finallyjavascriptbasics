/* 
get computer choice (random) - create a function
get user choice (prompt) make small case
write function that plays single round (parameters playerSelection & Computer Selection)
return messages like you won you lost its a tie
test function with console.log(playRound(playerSelection, computerSelection));
write new function playGame and nest playRound inside of it. user OR statements or Loop. 
console.log results of each round and the winner at the end.*/ 

let choices = ["rock", "paper", "scissors"];
let randomIndex;
const winningCombos = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper',
}

function getComputerChoice() {
    randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function getUserChoice() {
    let userChoice = prompt("What do you choose? Rock, Paper, or Scissors?").toLowerCase();
    while (!choices.includes(userChoice)) {
        userChoice = prompt("You entered an invalid answer. Please choose between Rock, Paper, and Scissors").toLowerCase();
    }
    return userChoice;
}

let computerSelection = getComputerChoice(); 
let playerSelection = getUserChoice();
console.log("this is the computers selection:")
console.log(computerSelection);
console.log("this is your selection")
console.log(playerSelection);


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie. Nobody wins"; 
    } else if (winningCombos[playerSelection] === computerSelection) {
        return "You won!!!";
    } else {
        return "You lost! :(";
    }
}

function playGame() {
console.log("round1")
console.log(playRound(playerSelection, computerSelection));
console.log("round2")
console.log(playRound(playerSelection, computerSelection));
console.log("round3")
console.log(playRound(playerSelection, computerSelection));
console.log("round4")
console.log(playRound(playerSelection, computerSelection));
console.log("round5")
console.log(playRound(playerSelection, computerSelection));
}

console.log(playGame())