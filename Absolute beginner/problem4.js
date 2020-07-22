const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
let length = +userInput[0];
let breadth= +userInput[1];
var A =length;
var B = breadth;

var C=A*B;
console.log(C);
//end-here
});
