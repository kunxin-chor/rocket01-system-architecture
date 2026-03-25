let x = Math.min(3,4);
// Functions have name: Math.min
// functions can also accept parameters (aka arugments)
// functions can also have a result - they simplify to one value (i.e, return value)
// To execute a function: call a function

// the name of our defined function must be a valid variable name
// 1. cannot begin with numbers
// 2. cannot have spaces
// 3. cannot be a keyword
function calculateArea(radius) {
    let circleArea = 22/7 * radius ** 2;
    return circleArea;
}

function calculateBMI(weight, height) {
    return weight / height ** 2;
}

let area = calculateArea(10);
console.log("Area of Circle =", area);

let bmi = calculateBMI(100, 1.71);
console.log("BMI =", bmi);

