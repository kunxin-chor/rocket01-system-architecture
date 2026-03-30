// reduce
// [1,2,3,4] => (find largest value) => 4
// [1,2,3,4] => (sum the values) => 8

// find the index with the largest number
let answerIndex = 0;     // => store the final answer (aka. accumulator)
let numbers = [4,5,67,8]; // => problem
let i = 0; // => loop counter for the while loop

// start of the algo
// 1. assign an assumption to the answer 
while (i < numbers.length) {
    console.log(numbers[i]);
    // 2. the reducing part
    if (numbers[i] > numbers[answerIndex]) {
        answerIndex = i;
    }
    i++;
}

