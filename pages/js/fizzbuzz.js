document.addEventListener("DOMContentLoaded", function() {
const outputParagraph = document.getElementById('output');

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
let outputContent = "";
for (let i = 1; i <= answer; i++) {
if (i % 15 === 0) {
    outputContent += "FizzBuzz ";
}else if (i % 5 === 0){
    outputContent += "Buzz ";
} else if (i % 3 === 0) {
    outputContent += "Fizz ";
} else {
    outputContent += i +" ";
}
}

outputParagraph.innerHTML = outputContent;

});