console.log("Hello World");

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection) {
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

const playerSelection = 'Rock';
console.log(playRound(playerSelection));