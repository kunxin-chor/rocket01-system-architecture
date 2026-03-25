// primitive are value data types: numbers, booleans and strings
// arrays are reference data types: array
let a = 3;
// we are copying the value from a to b
let b = a;
a = a + 1;
console.log(b);

let numbers = [100, 99, 98, 97];
// we are copying the reference from numbers to numbers2
// and hence they will both refer to the same array
let numbers2 = numbers;
numbers[0] = -99;
console.log(numbers);