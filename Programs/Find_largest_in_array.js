// Find largest number in an array
const inputArray = [3, 5, 2, 8, 1];

// 1st way to find the largest number in an array using Math.max and spread operator
function findLargestNumberWithMathMax(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    return Math.max(...arr);
}

const largestNumberWithMathMax = findLargestNumberWithMathMax(inputArray);
// console.log(`The largest number in the array (using Math.max) is: ${largestNumberWithMathMax}`);
// Output: 8

// 2nd way to find the largest number in an array using a for loop
function findLargestNumberWithLoop(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }   
    }
    return largest;
}

const largestNumberWithLoop = findLargestNumberWithLoop(inputArray);
// console.log(`The largest number in the array (using for loop) is: ${largestNumberWithLoop}`);
// Output: 8

// 3rd way to find the largest number in an array using recursion
function findLargestNumberRecursively(arr, index = 0, largest = null) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    if (index === arr.length) {
        return largest;
    }
    if (largest === null || arr[index] > largest) {
        largest = arr[index];
    }
    return findLargestNumberRecursively(arr, index + 1, largest);
}

const largestNumberRecursively = findLargestNumberRecursively(inputArray);
// console.log(`The largest number in the array (using recursion) is: ${largestNumberRecursively}`);
// Output: 8