function higherOrderFunction(callback) {
    console.log('This is the higher-order function speaking.');
    callback();
}

function passedFunction() {
    console.log('This is the passed function being called');
}

higherOrderFunction(passedFunction);

// Arrow Functions

const greet = (name) => {
    console.log(name);
}

greet("Ron");

const square = (a) => a * a;
console.log(square(4));

// Rest Operator
function restOperator(first, ...restOfArgs) {
    console.log(first);
    console.log(restOfArgs);
}

restOperator('one', 'two', 'three', 'four', 'five');

// Spread Operator
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

// Array
// Filter

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = nums.filter((num) => num % 2 == 0);
console.log(even)

const odd = nums.filter((num) => num % 2 != 0);
console.log(odd);

// to lowercase and to uppercase
let string = "HELLO";
console.log(string.toLowerCase());

// trim
let str2 = "   I love JavaScript!   ";
console.log(str2.trim());

// max and min
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);

const minNumber = Math.min(10, 5, 20);
console.log(minNumber);

// round
console.log(Math.round(3.6));

// floor
console.log(Math.floor(3.9));

// ceil
console.log(Math.ceil(3.1));

// to fixed
const price = 40.2567.toFixed(2);
console.log(price);

// date
const currentDate = new Date();
console.log(currentDate)

const christmas = new Date(2024, 11, 25)
console.log(christmas)


