document.addEventListener("DOMContentLoaded", function() {
    console.log("Script executed");

    let choices = ["rock", "paper", "scissors"];
    let randomIndex;
    const winningCombos = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper',
    };
    let userWins = 0;
    let computerWins = 0;

    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    document.body.appendChild(rockBtn);

    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";
    document.body.appendChild(scissorsBtn);

    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    document.body.appendChild(paperBtn);

    let getUserChoice = "";

    rockBtn.addEventListener("click", function() {
        getUserChoice = "rock";
        playGame();
    });

    scissorsBtn.addEventListener("click", function() {
        getUserChoice = "scissors";
        playGame();
    });

    paperBtn.addEventListener("click", function() {
        getUserChoice = "paper";
        playGame();
    });

    function playGame() {
        function getComputerChoice() {
            randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
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
        let playerSelection = getUserChoice;
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        console.log("Computer chose: " + computerSelection);
        console.log("You chose: " + playerSelection);
        console.log(result);
        if (result === "You won!!!") {
            userWins++;
        } else if (result === "You lost! :(") {
            computerWins++;
        }
       
        if (userWins === computerWins) {
            console.log("It's a tie.");
        } else if (userWins > computerWins) {
            console.log("YOU MADE IT! YOU WON THE WHOLE GAME");
        } else {
            console.log("Try again. I believe in you!");
        }

        console.log("User Wins: " + userWins);
        console.log("Computer Wins: " + computerWins);
    }
});