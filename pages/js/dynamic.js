document.addEventListener("DOMContentLoaded", function() {
    const list = document.querySelector("ul");
    const newItem = document.querySelector("input");
    const addItemButton = document.getElementById("addItemButton");

    addItemButton.addEventListener("click", function() {
        let inputValue = newItem.value;
        console.log("Button add clicked")

        const listElement = document.createElement("li");
        const spanElement = document.createElement("span");
        const deleteButton = document.createElement("button");
        
        listElement.appendChild(spanElement);
        listElement.appendChild(deleteButton);
        
        spanElement.textContent = inputValue;
        deleteButton.textContent = "Delete";

        list.appendChild(listElement);

        deleteButton.addEventListener("click", function() {
            listElement.remove();
        });

        newItem.value = "";
        newItem.focus();

    });
});