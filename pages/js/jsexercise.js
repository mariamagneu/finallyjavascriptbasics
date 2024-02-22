
const sumAll = function (firstNumber, lastNumber) { 
    let sum = 0;
    for (i = firstNumber; i <= lastNumber; i++) {
        if (Number.isInteger(i)) {
      sum += i;
        }}
        return sum;
    };

// Do not edit below this line
module.exports = sumAll;