const convertToCelsius = function(num) {
    num = (num - 32) / 1.8;
    num = Math.round(num * 10) / 10; 
    return num;
  };
  
  const convertToFahrenheit = function(num) {
    num = (num * 1.8) + 32;
    num = Math.round(num * 10) / 10;
    return num;
  };
  

// Do not edit below this line
module.exports = sumAll;