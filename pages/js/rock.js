console.log("Hello World");

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame() {
    function playRound(playerSelection) {
        if (playerSelection === null) {
            return "You canceled the game!";
        }

        playerSelection = playerSelection.toLowerCase();
        const computerSelection = getComputerChoice();
        const winningCombos = {
            'rock': 'scissors',
            'paper': 'rock',
            'scissors': 'paper'
        };

        if (playerSelection === computerSelection.toLowerCase()) {
            return "It's a tie!";
        } else if (winningCombos[playerSelection] === computerSelection.toLowerCase()) {
            return "You won!";
        } else { 
            return "You lose!";
        }
    }

    let playerScore = 0;
    let computerScore = 0;
    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        const result = playRound(playerSelection)
        if (result === "You won!") {
            playerScore++;
        } else if (result === "You lose!") {
            computerScore++;
        }
        console.log(`Round ${round}: ${result}`);
    }

    console.log("Game over!");

    if (playerScore > computerScore) {
        console.log("You won the game!!");
    } else if (playerScore < computerScore) {
        console.log("You lost the game :(")
    } else {
        console.log("It's a tie!");
    }
}

playGame();