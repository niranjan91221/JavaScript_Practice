// Many ways to  check if a string is a palindrome in JavaScript
// 1st way to check if a string is a palindrome using reverse method
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

const inputString1 = "racecar";
const isInputString1Palindrome = isPalindrome(inputString1);
// console.log(`Is "${inputString1}" a palindrome? ${isInputString1Palindrome}`);
// Output: true

// 2nd way to check if a string is a palindrome using a for loop
function isPalindromeWithLoop(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }   
    }
    return true;
}

const inputString2 = "hello";
const isInputString2Palindrome = isPalindromeWithLoop(inputString2);
// console.log(`Is "${inputString2}" a palindrome? ${isInputString2Palindrome}`);
// Output: false

// 3rd way to check if a string is a palindrome using recursion
function isPalindromeRecursively(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindromeRecursively(str.slice(1, -1));
}

const inputString3 = "racecar";
const isInputString3Palindrome = isPalindromeRecursively(inputString3);
// console.log(`Is "${inputString3}" a palindrome? ${isInputString3Palindrome}`);
// Output: true

// 4th way to check if a string is a palindrome using two pointers
function isPalindromeWithTwoPointers(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}   

const inputString4 = "madam";
const isInputString4Palindrome = isPalindromeWithTwoPointers(inputString4);
// console.log(`Is "${inputString4}" a palindrome? ${isInputString4Palindrome}`);
// Output: true

// 5th way to check if a string is a palindrome using regular expressions
function isPalindromeWithRegex(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

const inputString5 = "A man, a plan, a canal: Panama";
const isInputString5Palindrome = isPalindromeWithRegex(inputString5);
// console.log(`Is "${inputString5}" a palindrome? ${isInputString5Palindrome}`);
// Output: true

// 6th way to check if a string is a palindrome using the every() method
function isPalindromeWithEvery(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr.split('').every((char, index) => {
        return char === cleanedStr[cleanedStr.length - 1 - index];
    }
)};

const inputString6 = "No 'x' in Nixon";
const isInputString6Palindrome = isPalindromeWithEvery(inputString6);
// console.log(`Is "${inputString6}" a palindrome? ${isInputString6Palindrome}`);
// Output: true

// 7th way to check if a string is a palindrome using the reduce() method
function isPalindromeWithReduce(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reduce((reversed, char) => char + reversed, '');
    return cleanedStr === reversedStr;
}

const inputString7 = "Was it a car or a cat I saw?";
const isInputString7Palindrome = isPalindromeWithReduce(inputString7);
// console.log(`Is "${inputString7}" a palindrome? ${isInputString7Palindrome}`);
// Output: true

// 8th way to check if a string is a palindrome using the every() method with arrow function
function isPalindromeWithEveryArrow(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr.split('').every((char, index) => char === cleanedStr[cleanedStr.length - 1 - index]);
}

const inputString8 = "Step on no pets";
const isInputString8Palindrome = isPalindromeWithEveryArrow(inputString8);
// console.log(`Is "${inputString8}" a palindrome? ${isInputString8Palindrome}`);
// Output: true

// 9th way to check if a string is a palindrome using the every() method with arrow function and ternary operator
function isPalindromeWithEveryArrowTernary(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr.split('').every((char, index) => char === cleanedStr[cleanedStr.length - 1 - index] ? true : false);
}

const inputString9 = "Eva, can I see bees in a cave?";
const isInputString9Palindrome = isPalindromeWithEveryArrowTernary(inputString9);
// console.log(`Is "${inputString9}" a palindrome? ${isInputString9Palindrome}`);
// Output: true