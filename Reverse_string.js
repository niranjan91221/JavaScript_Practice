// Reverse a string in JavaScript with many ways to do it
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
const inputString = "Hello, World!";
const reversedString = reverseString(inputString);
// console.log(`Reversed string (using split/reverse/join): ${reversedString}`);
 // Output: !dlroW ,olleH

//  2nd way to reverse a string using a for loop
function reverseStringWithLoop(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const reversedStringWithLoop = reverseStringWithLoop(inputString);
// console.log(`Reversed string (using for loop): ${reversedStringWithLoop}`);
// Output: !dlroW ,olleH

// 3rd way to reverse a string using recursion
function reverseStringRecursively(str) {
    if (str === "") {
        return str;
    }
    return reverseStringRecursively(str.substr(1)) + str.charAt(0);
}

const reversedStringRecursively = reverseStringRecursively(inputString);
// console.log(`Reversed string (using recursion): ${reversedStringRecursively}`);
// show me the execution steps of the code of reverseStringRecursively("Hello, World!"):
// 1. Call reverseStringRecursively("Hello, World!")
//    - str is not empty, so proceed to the next step.
//    - Call reverseStringRecursively("ello, World!") + "H"
// 2. Call reverseStringRecursively("ello, World!")
//    - str is not empty, so proceed to the next step.
//    - Call reverseStringRecursively("llo, World!") + "e"
// 3. Call reverseStringRecursively("llo, World!")
//    - str is not empty, so proceed to the next step.
//    - Call reverseStringRecursively("lo, World!") + "l"
// 4. Call reverseStringRecursively("lo, World!")
//    - str is not empty, so proceed to the next step.
//    - Call reverseStringRecursively("o, World!") + "l"
// 5. Call reverseStringRecursively("o, World!")
//    - str is not empty, so proceed to the next step.
//    - Call reverseStringRecursively(", World!") + "o"
// 6. Call reverseStringRecursively(", World!")
//    - str is not empty, so proceed to the next step.
//    - Call reverseStringRecursively(" World!") + ","
// 7. Call reverseStringRecursively(" World!")
//    - str is not empty, so proceed to the next step.
//    - Call reverseStringRecursively("World!") + " "
// 8. Call reverseStringRecursively("World!")
//    - str is not empty, so proceed to the next step.
//    - Call reverseStringRecursively("orld!") + "W"
// 9. Call reverseStringRecursively("orld!")
//    - str is not empty, so proceed to the next step.
//    - Call reverseStringRecursively("rld!") + "o"
// 10. Call reverseStringRecursively("rld!")
//     - str is not empty, so proceed to the next step.
//     - Call reverseStringRecursively("ld!") + "r"
// 11. Call reverseStringRecursively("ld!")
//     - str is not empty, so proceed to the next step.
//     - Call reverseStringRecursively("d!") + "l"
// 12. Call reverseStringRecursively("d!")
//     - str is not empty, so proceed to the next step.
//     - Call reverseStringRecursively("!") + "d"
// 13. Call reverseStringRecursively("!")
//     - str is not empty, so proceed to the next step.
//     - Call reverseStringRecursively("") + "!"
// 14. Call reverseStringRecursively("")
//     - str is empty, return ""
// 15. Now we start returning back up the call stack:
//     - Return "" + "!" = "!"
// 16. Return "!" + "d" = "!d"
// 17. Return "!d" + "l" = "!dl"
// 18. Return "!dl" + "r" = "!dlr"
// 19. Return "!dlr" + "o" = "!dlro"
// 20. Return "!dlro" + "W" = "!dlroW"
// 21. Return "!dlroW" + " " = "!dlroW "
// 22. Return "!dlroW " + "," = "!dlroW ,"
// 23. Return "!dlroW ," + "o" = "!dlroW ,o"    
// 24. Return "!dlroW ,o" + "l" = "!dlroW ,ol"
// 25. Return "!dlroW ,ol" + "l" = "!dlroW ,oll"
// 26. Return "!dlroW ,oll" + "e" = "!dlroW ,olle"
// 27. Return "!dlroW ,olle" + "H" = "!dlroW ,olleH"

// Output: !dlroW ,olleH

// 4th way to reverse a string using reduce
function reverseStringWithReduce(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

const reversedStringWithReduce = reverseStringWithReduce(inputString);
// console.log(`Reversed string (using reduce): ${reversedStringWithReduce}`);
// Output: !dlroW ,olleH



const name = "Hello";
// for(let i = name.length; i >= 0; i--) {
//     console.log(name[i]);
// }
console.log(name.substring(0, 3));
console.log(name.length);