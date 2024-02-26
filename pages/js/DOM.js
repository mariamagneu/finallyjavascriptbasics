const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.textContent = 'Hey I\'m red';
para.style.color = 'red';
container.appendChild(para);

const subtitle = document.createElement('h3');
subtitle.textContent = 'I\'m a blue h3!';
subtitle.style.color = 'blue';
container.appendChild(subtitle);

const newDiv = document.createElement("div");
newDiv.style.backgroundColor = 'pink';
newDiv.style.border = 'solid thin black';
newDiv.classList.add('container');
document.body.appendChild(newDiv);


const divText = document.createElement("h1");
divText.textContent = "I\'m in a div";
newDiv.appendChild(divText);

const divText2 = document.createElement("p");
divText2.textContent = "Me too!"
newDiv.appendChild(divText2);


const btn = document.querySelector('#btn');
btn.addE = () => alert("Hello World");


//a <p> with red text that says “Hey I’m red!”
//an <h3> with blue text that says “I’m a blue h3!”
//a <div> with a black border and pink background color with the
// following elements inside of it:
//another <h1> that says “I’m in a div”
//a <p> that says “ME TOO!”
//Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
