const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter your name: ", function (userName) {
  console.log("Hello, " + userName + "!");
  rl.close();
});
