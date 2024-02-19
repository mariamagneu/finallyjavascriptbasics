document.addEventListener('DOMContentLoaded', function() {

    const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
    const list = document.createElement('ul');

    // Add your code here
    for (const listElement of myArray) {
        list.innerHTML += `<li>${listElement}</li>`;
    }
    // Don't edit the code below here!

    const section = document.querySelector('section');
    section.appendChild(list);

});