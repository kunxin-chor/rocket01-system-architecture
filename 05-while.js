// Looping (aka iteration)
// Repeating a chunk of code over and over again
// Within the () is the condition for the while loop to keep repeating (i.e running)

// loop sentinel
let i = 0;

// i < 3: guard condition
while (i < 10) {
    console.log("I will remember to do my homework");
    // increment
    i = i + 1;
}

// accumulator
let sum = 0;

// loop sentiel
let x = 5;

while (x < 11) {
    sum = sum + x;
    x = x + 1;
}
console.log(sum);
