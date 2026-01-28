//Selecting Elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

//creating new element
const li = document.createElement("li");
const deleteButton = document.createElement("button");

// populating the list 
li.textContent = input.value;
deleteButton.textContent = '❌';
deleteButton.setAttribute('aria-label', 'Remove chapter');

//appending to the list 
li.append(deleteButton);
list.append(li);

