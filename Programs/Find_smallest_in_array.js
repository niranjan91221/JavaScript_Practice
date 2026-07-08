// Find smallest number in an array
const inputArray = [3, 5, 2, 8, 1];

// 1st way to find the smallest number in an array using Math.min and spread operator
function findSmallestNumberWithMathMin(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    return Math.min(...arr);
}

const smallestNumberWithMathMin = findSmallestNumberWithMathMin(inputArray);
// console.log(`The smallest number in the array (using Math.min) is: ${smallestNumberWithMathMin}`);
// Output: 1

// 2nd way to find the smallest number in an array using a for loop
function findSmallestNumberWithLoop(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

const smallestNumberWithLoop = findSmallestNumberWithLoop(inputArray);
// console.log(`The smallest number in the array (using for loop) is: ${smallestNumberWithLoop}`);
// Output: 1

// 3rd way to find the smallest number in an array using recursion
function findSmallestNumberRecursively(arr, index = 0, smallest = null) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    if (index === arr.length) {
        return smallest;
    }
    if (smallest === null || arr[index] < smallest) {
        smallest = arr[index];
    }
    return findSmallestNumberRecursively(arr, index + 1, smallest);
}

const smallestNumberRecursively = findSmallestNumberRecursively(inputArray);
// console.log(`The smallest number in the array (using recursion) is: ${smallestNumberRecursively}`);
// Output: 1