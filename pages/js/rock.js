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

function playGame() {
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
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "It's a tie. Nobody wins"; 
        } else if (winningCombos[playerSelection] === computerSelection) {
            return "You won!!!";
        } else {
            return "You lost! :(";
        }
    }
    
    console.log("Round 1:");
    let playerSelection = getUserChoice();
    let computerSelection = getComputerChoice();
    console.log("Computer chose: " + computerSelection);
    console.log("You chose: " + playerSelection);
    console.log(playRound(playerSelection, computerSelection));

    console.log("Round 2:");
    playerSelection = getUserChoice();
    computerSelection = getComputerChoice();
    console.log("Computer chose: " + computerSelection);
    console.log("You chose: " + playerSelection);
    console.log(playRound(playerSelection, computerSelection));

    console.log("Round 3:");
    playerSelection = getUserChoice();
    computerSelection = getComputerChoice();
    console.log("Computer chose: " + computerSelection);
    console.log("You chose: " + playerSelection);
    console.log(playRound(playerSelection, computerSelection));

    console.log("Round 4:");
    playerSelection = getUserChoice();
    computerSelection = getComputerChoice();
    console.log("Computer chose: " + computerSelection);
    console.log("You chose: " + playerSelection);
    console.log(playRound(playerSelection, computerSelection));

    console.log("Round 5:");
    playerSelection = getUserChoice();
    computerSelection = getComputerChoice();
    console.log("Computer chose: " + computerSelection);
    console.log("You chose: " + playerSelection);
    console.log(playRound(playerSelection, computerSelection));
}

playGame();