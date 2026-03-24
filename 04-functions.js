// console.log --> name of the function
// to use a function, we state its name
// and within the () we put the parameter (contextual data)
console.log("Hello world");
// we have two pieces of contexual data (parameters)
// seperated by comma
console.log("4 + 4 =", 8);

// certain functions can have results
// -- they simplify to a value
let b = Math.min(6, 7);
// => b = 6

// console.log cannot show anything to the screen
// until the parameters are values
console.log(3 + 3, 7 * 2);
// => console.log(6, 14)

console.log(7 + Math.min(3, 5));
// => console.log(7 + 3)
// => console.log(10)

// 1. variable sub
// 2. parenthesis
// 3. NEW. function executions
// 4. Arth. operators
//    ** 
//    * /
//    + -
// 5. Assignment =
let x = 6;
let y = 7;
let z = 10;
let ans = Math.min(x+Math.max(y,z), x*z);
// => let ans = Math.min(6+Math.max(7,10), 6*10);
// => let ans = Math.min(6+10, 6*10);
// => let ans = Math.min(16, 60);
// => let ans = 16;
console.log(ans);


