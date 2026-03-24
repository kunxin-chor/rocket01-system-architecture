// symbols that represents a function (command)
// and they work on data

// arithmetic operators
// + - / * **
let a = 3;
let b = 4;
console.log(a + b);
// ==> console.log(3 + 4)
// ==> console.log(7)
console.log(2 ** 3);

// we parenthesis to force order of precedence
console.log(2 * (3 + 2))
console.log(3 + 3 ** 3)
console.log(4 * 4 ** 2);

// Order of precedence
// 1. Anything within parenthesis goes first
// 2. Variable substitution 
// 3. Arth. operators
//    **
//    * / 
//    + -
// 4. = (assignment operator)

let x = 5;
let y = 6;
let z = x * y;
// => let z = 5 * 6
// => let z = 30

let a1 = 5;
let a2 = 10;
let b3 = 15;
let c = a1 * (a2 ** 3 + b3);
// => let c = a1 * (a2 ** 3 + b3);
// => let c = 5 * (10 ** 3 + 15)
// => let c = 5 * (1000 + 15)
// => let c = 5 * 1015;
// => let c = 5075