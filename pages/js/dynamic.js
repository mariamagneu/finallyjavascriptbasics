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