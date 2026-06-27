const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter your first number : ", function (num1){
  rl.question("Please enter your second number : ", function (num2){
    rl.question("Please enter the operation (+, -, *, /) : ", function (operator){
      let result = 0;
      switch (operator){
        case "+":
          result = parseInt(num1) + parseInt(num2);
          break;
        case "-":
          result = parseInt(num1) - parseInt(num2);
          break;
        case "*":
          result = parseInt(num1) * parseInt(num2);
          break;
        case "/":
          result = parseInt(num1) / parseInt(num2);
          break;
        default:
          console.log("Invalid operator");
      }
      console.log("The result is : " + result);
      rl.close();
    });
  });
});