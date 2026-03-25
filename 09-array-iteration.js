let names = ["Tony Stare", "Peter Barker", "John Wick"];
let mixed = [1, 3.14, "ABC", true, ["A", "B", "C"]]
console.log(mixed[4][1])
console.log(mixed.length);

let index = 0;
while (index < names.length) {
    console.log(names[index].toUpperCase());
    index += 1;
}

let numbers = [9, -100, 55, 32, 44, 61, 71];
// find the largest number in the array
let largest = numbers[0];
let n =0;
while (n < numbers.length) {
    console.log(numbers[n]);
    if (numbers[n] >= largest) {

    }
    // n = n + 1;
    n++;
    // how can we ensure that largest still holds largest number by this point
}
console.log("Largest =", largest);

let z = [100, -99, 23, 45, -5, 7];
// find how many positive numbers there are
let positive = 0;

let num = 0;
while (num < z.length) {
    if (z[num] > 0) {
        positive = positive + 1;
    }
    num = num + 1;
}
console.log("Positive number =", positive);

let m = 30;
let a = m > 90;