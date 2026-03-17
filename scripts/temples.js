//dates
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

//menu
const button = document.querySelector("#hamburger");
const navigation = document.querySelector(".menu");

//listener events
button.addEventListener("click", function () {
    if (button.classList.contains("open"))
    {
        button.textContent = "≡";
    }
    else {
        button.textContent = "❌";
    }
    navigation.classList.toggle("open");
    button.classList.toggle("open");
});