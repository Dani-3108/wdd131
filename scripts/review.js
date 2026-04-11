const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

let reviewCount = localStorage.getItem("reviewCount");

if (reviewCount === null) {
    reviewCount = 0;
}
else {
    reviewCount = parseInt(reviewCount) + 1;
}

localStorage.setItem("reviewCount", reviewCount); 
document.getElementById("reviewcount").innerHTML = "You are review number: " + reviewCount;