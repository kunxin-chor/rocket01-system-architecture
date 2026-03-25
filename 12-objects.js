const prompt = require('prompt-sync')();

// Three basic primitive types: numbers, strings, boolean
// Reference data types:
// 1. array: used to store a list of stuff, declared with [ ]
// 2. objects: used to store key/value pairs, declared with { }
let user = {
  "name":"John Wick",
  "age": 42
}

console.log(user.name);
console.log(user.age);

let month = prompt("Enter the first three alphabets of the month: ");

// use an object as a look up table
let dayByMonth = {
    'jan':31,
    'feb': 28,
    'mar': 30,
    'apr': 31,
    'may': 30
}

let daysOfMonth = [31, 28, 30, 31, 30];

console.log(dayByMonth[month]);

// we use an array to store a list of entities (library)
// we use an object to represent an entity with composite data (book)
let patientList = [
    {
        "patientNo": 123456,
        "name":"Mary Sue",
        "age":33,
        "gender":"f"
    },
    {
        "patientNo":745743,
        "name":"John Snow",
        "age":42,
        "gender":"m"
    }
]
console.log(patientList[1].age)