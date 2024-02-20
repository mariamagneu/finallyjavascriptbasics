document.addEventListener('DOMContentLoaded', function() {

    
    let i = 500;
    const para = document.createElement('p');

    function isPrime(num) {
      for(let i = 2; i < num; i++) {
        if(num % i === 0) {
          return false;
        }
      }

      return true;
    }


    //  You need to use a loop to go through the numbers 2
    // to 500 backwards (1 is not counted as a prime number), and run the
    // provided isPrime() function on them. For each number that isn't a
    // prime number, continue on to the next loop iteration.
    // For each one that is a prime number, add it to the paragraph's 
    //textContent along with some kind of separator.
    
    while (i >= 2) {
        if (isPrime(i)) {
            para.textContent += i + ', '; // Add prime numbers to the paragraph
        }
        i--;
    }

    // Don't edit the code below here!
    const section = document.querySelector('section');
    section.appendChild(para);


});