//variables
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
//event listener
button.addEventListener("click", function () {
    if (input.value.trim() !== "") { /*trim()  method removes any whitespace from the beginning and end of a string.*/
        //element creation 
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        //adding data to elements
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);
        input.value = "";
        input.focus();
        //event listener delet button 
        deleteButton.addEventListener("click", function () {
            li.remove();
            input.focus();
        });
    }
});
