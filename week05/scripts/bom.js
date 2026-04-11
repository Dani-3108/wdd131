//variables
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
//Arrays
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});
// creating functions
function displayList(item) {
    //element creation
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    //adding data to elements
    li.textContent = item;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.append(li);
    //event listener delete button
    deleteButton.addEventListener("click", function () {
        li.remove();
        deleteChapter(li.textContent);
        input.focus();
    });
}
function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}
function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

//event listener
button.addEventListener("click", function () {
    if (input.value.trim() !== "") { /*trim()  method removes any whitespace from the beginning and end of a string.*/
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});
