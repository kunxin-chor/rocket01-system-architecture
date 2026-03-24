const prompt = require('prompt-sync')();

// console.log is an example of JS function
// a function is a command to do something in a programming language
console.log("BMI Calculator");

// ask for user input
// weight is a variable: it's a container that can store data
// prompt is a function: it ask the user for data
let weight = prompt("Please enter your weight: ");
// + is an operator that represents a function, in this case: combine two text together
// Anything within quotes is a string is textual data
console.log("Your weight is " + weight);

let height = prompt("Please enter your height: ");
console.log("Your height is " + height);

// weight is assumed to be in kg
// height is assumed to be in m
let bmi = weight/ height ** 2;
console.log("Your bmi is " + bmi);

