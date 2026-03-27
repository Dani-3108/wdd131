//variables
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
///////////////////////////
//variables
const temperature = 10;
const windSpeed = 6;
//function
const calculateWindChill = function (temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - 11.37 * (Math.pow(windSpeed, 0.16)) + (0.3965 * temperature) * (Math.pow(windSpeed, 0.16))
}
//if statement
let result;
if (temperature <= 10 && windSpeed > 4.8) {
    result = calculateWindChill(temperature, windSpeed).toFixed(1)+ "°C";
}
else {
    result="N/A "
}
document.getElementById("windchill").innerHTML = result;

