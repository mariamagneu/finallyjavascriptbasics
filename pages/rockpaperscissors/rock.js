
document.addEventListener("DOMContentLoaded", function() {


    console.log("Script executed")
let choices = ["rock", "paper", "scissors"];
let randomIndex;
const winningCombos = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper',
}
let userWins = 0;
let computerWins = 0;



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
    let result = playRound(playerSelection, computerSelection);

    console.log("Computer chose: " + computerSelection);
    console.log("You chose: " + playerSelection);
    console.log(playRound(playerSelection, computerSelection));
    if (result === "You won!!!") {
        userWins++;
    } else if (result === "You lost! :(") {
        computerWins++;
    }
   
}

playGame();

if (userWins === computerWins) {
    console.log("It's a tie.")
} else if (userWins > computerWins) {
    console.log("YOU MADE IT! YOU WON THE WHOLE GAME")
} else {
    console.log("Try again. I believe in you!")
}

console.log (userWins)
console.log (computerWins)

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
document.body.appendChild(rockBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
document.body.appendChild(scissorsBtn);

const paperBtn = document.createElement("button");
document.body.appendChild(paperBtn);
paperBtn.textContent = "Paper";



rockBtn.addEventListener("click", function() {
    playerSelection = "rock";
    playRound();
});

scissorsBtn.addEventListener("click", function() {
    playerSelection = "scissors";
    playRound();
});

paperBtn.addEventListener("click", function() {
    playerSelection = "paper";
    playRound();
});

});