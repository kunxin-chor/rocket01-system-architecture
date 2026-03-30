let abc = 123;
console.log(abc);
abc = 456; // reassignment (we change the content of `abc` to 456);

// a const variable is one which we cannot reassign to
const def = 456;
// def = 888; // cannot reassign

// for objects and arrays variables, they store the reference
const fruits = ["apples", "bananas", "oranges"];
fruits.push("durians");
console.log(fruits);

// we use `let` when the variable needed to be changed
let i = 0;
while (i < 10); {
    console.log(i);
    i++;
}

