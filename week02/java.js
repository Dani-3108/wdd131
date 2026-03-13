const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//For Loop
for (let i = 0; i < studentReport.length; i++){
    console.log(studentReport[i]);
}

//While loop
let count = 0;
while (count < studentReport.length) {
    console.log(studentReport[count])
    count = count + 1;
}
//foreach loop´
studentReport.forEach(function (numbers) {
    console.log(numbers)
})
//for...in loop
for (let i in studentReport) {
    console.log(studentReport[i])
}