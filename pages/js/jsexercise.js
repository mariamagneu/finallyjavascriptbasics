const sumAll = function(firstNumber, lastNumber) {
    if (typeof firstNumber !== 'number' || typeof lastNumber !== 'number') {
        return "ERROR"; // Check if either argument is not a number
    }
    if (Array.isArray(firstNumber) || Array.isArray(lastNumber)) {
        return "ERROR"; // Check if either argument is an array
    }
    if (firstNumber < 0 || lastNumber < 0) {
        return "ERROR"; // Check if either number is negative
    }

    const minNumber = Math.min(firstNumber, lastNumber);
    const maxNumber = Math.max(firstNumber, lastNumber);
    let sum = 0;
    for (let i = minNumber; i <= maxNumber; i++) {
        if (Number.isInteger(i)) {
            sum += i;
        }
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;