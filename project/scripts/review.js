const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

let formCount = localStorage.getItem("formcount");

if (formCount === null) {
    formCount = 0;
}
else {
    formCount = parseInt(formCount) + 1;
}

localStorage.setItem("formcount", formCount);
document.getElementById("formcount").innerHTML = `You are form number: ${formCount}`;
