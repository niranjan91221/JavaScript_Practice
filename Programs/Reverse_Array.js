// Reverse an array in JavaScript with many ways to do it
// 1st way to reverse an array using reverse method
function reverseArray(arr) {
    return arr.reverse();
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(inputArray);
// console.log(`Reversed array (using reverse method): ${reversedArray}`);
// Output: [5, 4, 3, 2, 1]

// 2nd way to reverse an array using a for loop
function reverseArrayWithLoop(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

const reversedArrayWithLoop = reverseArrayWithLoop(inputArray);
// console.log(`Reversed array (using for loop): ${reversedArrayWithLoop}`);
// Output: [5, 4, 3, 2, 1]

// 3rd way to reverse an array using recursion
function reverseArrayRecursively(arr) {
    if (arr.length === 0) {
        return [];
    }
    return [arr[arr.length - 1]].concat(reverseArrayRecursively(arr.slice(0, -1)));
}

const reversedArrayRecursively = reverseArrayRecursively(inputArray);
// console.log(`Reversed array (using recursion): ${reversedArrayRecursively}`);
// Output: [5, 4, 3, 2, 1]