const sumAll = function (firstNumber, lastNumber) { 
    let sum = 0;
    const minNumber = Math.min(firstNumber, lastNumber);
    const maxNumber = Math.max(firstNumber, lastNumber);
    for (i = minNumber; i <= maxNumber; i++) {
        if (minNumber < 0 || maxNumber < 0) {
            return "ERROR";
    } else if (typeof firstNumber !== 'number' || typeof lastNumber !== 'number') {
        return "ERROR"
    } else if  (Number.isInteger(i)) {
      sum += i;
        }}
        return sum;
    };


// Do not edit below this line
module.exports = sumAll;