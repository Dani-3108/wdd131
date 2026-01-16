// constant that hold full date data
const today = new Date();

// variable that holds current year
const currentYear = today.getFullYear();
document.getElementById("currentyear").textContent = currentYear;

//last modified date 
document.getElementById("lastModified").innerHTML = document.lastModified;