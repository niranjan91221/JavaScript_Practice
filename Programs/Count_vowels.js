// Count vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

const inputString = "Hello, World!, Javascript is awesome!";
const vowelCount = countVowels(inputString);
console.log(`Number of vowels in "${inputString}": ${vowelCount}`);
// Output: 3

// 2nd way to count vowels in a string using regex
function countVowelsWithRegex(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

const vowelCountWithRegex = countVowelsWithRegex(inputString);
// console.log(`Number of vowels in "${inputString}" (using regex): ${vowelCountWithRegex}`);
// Output: 3