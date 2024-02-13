/* 
get computer choice (random) - create a function
get user choice (prompt) make smaller case
write function that plays single round (parameters playerSelection & Computer Selection)
return messages like you won you lost its a tie
test function with console.log(playRound(playerSelection, computerSelection));
write new function playGame and nest playRound inside of it. user OR statements or Loop. 
console.log results of each round and the winner at the end.*/ 

let choices = ["Rock", "Paper", "Scissors"];
let randomIndex;

function getComputerChoice() {
    randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());