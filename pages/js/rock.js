function getComputerChoice () {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return  choices[randomIndex];
}

console.log(getComputerChoice());

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const winningCombos = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (winningCombos[playerSelection] === computerSelection) {
        return "You won!";
    } else { 
        return "You lose!";
    }
}

const playerSelection = 'Rock';
const computerSelection = 'getComputerChoice';
console.log(playRound(playerSelection, computerSelection));