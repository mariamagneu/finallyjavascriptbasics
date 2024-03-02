const list = document.querySelector("ul");
const newItem = document.querySelector("input");
const actionButtons = document.querySelector("button");

function clickButton() {
    actionButtons.addEventListener("click", function() {
        let inputValue = newItem.value;
        inputValue = "";
    });
}

clickButton();

const listElement = document.createElement("li");
const spanElement = document.createElement("span");
const buttonElement = document.createElement("button");

listElement.appendChild(spanElement);
listElement.appendChild(buttonElement);