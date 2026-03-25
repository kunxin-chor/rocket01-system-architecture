// three primitive data types
// 1. numbers (intgers, floats)
// 2. strings
// 3. boolean

// reference data types / complex data types
// array holds numerous values in one name (identifier)
let a = 3;
let fruits = ["apples", "bananas", "alarm clock"];
console.log(fruits[1]);
let primes = [1, 3, 5, 7, 11, 13];
console.log(primes);
console.log(primes[3]);
let x = 4;
console.log(primes[x]);

let i = 0;
while (i < primes.length) {
    console.log(primes[i]);
    i += 1;
}

