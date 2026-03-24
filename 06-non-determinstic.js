const prompt = require('prompt-sync')();

// detemrinstic
// let i = 0;
// while (i < 20) {
//     console.log(i);
//     i = i+ 1;
// }
// keep repeating until the user enters a positive number
let num = parseInt(prompt("Please enter a positive number: "));

// make sure num is positive
while (num < 0) {
    console.log("sorry, not a positive number");
    num = parseInt(prompt("Please enter a positive number: "));
}
console.log("Your number is ", num);