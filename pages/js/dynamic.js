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
const deleteButton = document.createElement("button");

listElement.appendChild(spanElement);
listElement.appendChild(deleteButton);

spanElement.textContent = inputValue;
deleteButton.textContent = "Delete";

list.appendChild(listElement);

function deleteListElement() {
    deleteButton.addEventListener("click", function() {
        listElement.remove();
    });
}