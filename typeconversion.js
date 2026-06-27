// What is Type Conversion?

// Type Conversion is the process of converting a value from one data type to another.

// JavaScript performs type conversion in two ways:

// Implicit Type Conversion (Type Coercion) – Done automatically by JavaScript.
// Explicit Type Conversion (Type Casting) – Done manually by the programmer.

// 1. Implicit Type Conversion (Type Coercion)
// Definition :-
// Implicit type conversion occurs when JavaScript automatically converts one data type to another during an operation.

console.log("5" + 2);
// output
// 52

console.log(5 + "2");
// output
// 52

console.log("Hello " + true);
// output
// Hello true

console.log(10 + true);
// output
// 11

console.log(10 + false);
// output
// 10

console.log(10 + null);
// output
// 10

console.log(10 + undefined);
// output
// NaN

console.log("10" - 5);
// output
// 5

console.log("5" * 2);
// output
// 10

console.log("20" / 4);
// output
// 5

console.log(5 == "5");
// output
// true

console.log(5 === "5")
// output
// false


// =====+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 2. Explicit Type Conversion (Type Casting)
// Definition

// Explicit conversion means the programmer manually converts one data type into another using built-in functions.

console.log(Number("10"));
console.log(typeof Number("10"));
// output
// 10
// number

console.log(Number("10.5"));
// output
// 10.5

console.log(Number(true));
// output
// 1

console.log(Number(false));
// output
// 0

console.log(Number(null));
// output
// 0

console.log(Number(undefined));
// output
// NaN

console.log(Number("Hello"));
// output
// NaN