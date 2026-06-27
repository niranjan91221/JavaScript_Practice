// Javascript Data Types(Primitive & Reference Types)
// Primitive Data Types(Stored by Value)
// Reference (Non-Primitive) Data Types(Stored by Reference)

// Primitive Data types
    // Primitive data Types are immutable(cannot be changed directly) and store the actual value

    // There are 7 types :
    //     Number
    //     String
    //     Boolean
    //     Undefined
    //     Null
    //     Symbol
    //     BigInt

// Number
let age = 22

console.log(age);
console.log(typeof age);

// Number -> Floating point number
let price = 99.99

console.log(price);
console.log(typeof price);

// String
let name = "Niranjan"

console.log(name);
console.log(typeof name);

// Boolean
let isLoggedIn = true

console.log(isLoggedIn);
console.log(typeof isLoggedIn);

// Undefined
let salary

console.log(salary);
console.log(typeof salary);

// Null
let user = null

console.log(user);
console.log(typeof user);

// symbol
let id = Symbol("id")

console.log(id);
console.log(typeof id);

// BigInt
let big = 123456789012345678901234567890n;

console.log(big);
console.log(typeof big);

// =++++++++++++++++++++++++==============================================

// Reference (Non-Primitive) Data Types
    // Reference types store a reference (memory address) to the data instead of the actual value.

    // The main reference types are:
    // Object
    // Array
    // Function


// Object
let student = {
    name: "Niranjan Pegada",
    age: 22
}

console.log(student);
console.log(typeof student);

// for fetching name from the object
console.log(student.name);

// Array
let colors = ["Red", "Orange", "Grapes", "Mango"]

console.log(colors);
console.log(typeof colors);

// fetch the values form the array
console.log(colors[2]);

// Checking if a Value is an Array
console.log(Array.isArray(colors));

// Function
function greet() {
    return "Hello Niranjan";
}

console.log(greet());
console.log(typeof greet);
